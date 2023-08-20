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
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { extname, join } from 'path';
import { diskStorage } from 'multer';
import { createReadStream } from 'fs';
import { Response } from 'express';

@Controller('video')
export class VideoController {
  constructor(private videoService: VideoService) {}

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
}
