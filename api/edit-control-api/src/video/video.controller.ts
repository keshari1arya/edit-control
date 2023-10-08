import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  StreamableFile,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { VideoService } from './video.service';
import { Video } from 'src/entities/video.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { extname, join } from 'path';
import { diskStorage } from 'multer';
import { createReadStream } from 'fs';
import { Response } from 'express';
import { S3 } from 'aws-sdk';

@ApiTags('video')
@Controller('video')
export class VideoController {
  constructor(private videoService: VideoService) { }

  @Get('')
  public list(): Promise<Video[]> {
    return this.videoService.getVideos();
  }

  @ApiOperation({ summary: 'Upload a video' })
  @ApiResponse({ status: 201, description: 'Video uploaded successfully' })
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('video', {
      storage: diskStorage({
        destination: './uploads', // Set your desired upload directory
        filename: (req, file, callback) => {
          const uniqueName = Date.now() + extname(file.originalname);
          callback(null, uniqueName);
        },
      }),
    }),
  )
  async uploadVideo(@UploadedFile() file: Express.Multer.File) {
    // You can now use the 'file' object to access the uploaded video details
    const url = `uploads/${file.filename}`;

    // Call your video service to save the URL to the database
    await this.videoService.saveVideoUrl(url);

    return { message: 'Video uploaded successfully' };
  }

  @ApiOperation({ summary: 'Download a video' })
  @ApiResponse({ status: 200, description: 'Video downloaded successfully' })
  @Get('download/:videoId')
  async downloadVideo(
    @Param('videoId') videoId: number,
    @Res() res: Response,
  ): Promise<StreamableFile> {
    const video = await this.videoService.getVideoById(videoId);

    const videoPath = join(__dirname, '..', video.url); // Change the path accordingly
    const file = createReadStream(join(process.cwd(), 'package.json'));
    return new StreamableFile(file);
  }

    @ApiOperation({ summary: 'Get a pre-signed URL for uploading a file to AWS S3' })
    @ApiResponse({ status: 200, description: 'Pre-signed URL generated successfully' })
    @Get('presigned-upload-url')
    async getPresignedUploadUrl(): Promise<{ presignedUrl: string }> {
      const s3 = new S3({
        // Configure your AWS credentials here (accessKeyId and secretAccessKey)
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET,
      });
  
      const params = {
        Bucket: "edit-control-dev", // Replace with your S3 bucket name
        Key: `uploads/${Date.now()}_${Math.floor(Math.random() * 1000)}`, // Unique key for the uploaded file
        Expires: 3600, // Expiration time for the pre-signed URL in seconds (1 hour in this example)
        ContentType: 'application/octet-stream', // Set the content type based on the file type you expect
        //add file type here
       // type : JSON.stringify(UploadedFile.type)
      };
  
      try {
        const presignedUrl = await s3.getSignedUrlPromise('putObject', params);
        return { presignedUrl };
      } catch (error) {
        console.error('Error generating pre-signed URL:', error);
        throw new Error('Failed to generate pre-signed URL');
      }
    }
}
