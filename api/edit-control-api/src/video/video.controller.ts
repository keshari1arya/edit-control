import { Controller, Get } from '@nestjs/common';
import { VideoService } from './video.service';
import { Video } from 'src/entities/video.entity';

@Controller('video')
export class VideoController {
  constructor(private videoService: VideoService) {}

  @Get('')
  public list(): Promise<Video[]> {
    return this.videoService.getVideos();
  }
}
