import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Task } from './task.entity';
import { Video } from './video.entity';

@Entity()
export class TaskVideo {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Task, (task) => task.taskVideos)
  @JoinColumn()
  task: Task;

  @ManyToOne(() => Video, { eager: true })
  @JoinColumn()
  video: Video;
}
