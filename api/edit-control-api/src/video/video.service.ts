import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Video } from 'src/entities/video.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VideoService {
  constructor(
    @InjectRepository(Video)
    private readonly videoRepository: Repository<Video>,
  ) {}

  public getVideos(): Promise<Video[]> {
    return this.videoRepository.find();
  }

  async saveVideoUrl(url: string) {
    const video = this.videoRepository.create({ url });
    await this.videoRepository.save(video);
    return video;
  }

  async getVideoById(id: number): Promise<Video> {
    return this.videoRepository.findOneOrFail({ where: { id: id } });
  }
}
