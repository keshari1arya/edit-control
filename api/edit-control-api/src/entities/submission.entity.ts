import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Task } from './task.entity';
import { Video } from './video.entity';

@Entity()
export class Submission {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Video, { eager: true }) // Assuming Video is the name of the Video entity class
  @JoinColumn()
  video: Video;

  @Column({ default: false })
  isApproved: boolean;

  @Column({ nullable: true })
  comment: string;

  @ManyToOne(() => Task, (task) => task.submissions)
  @JoinColumn()
  task: Task;
}
