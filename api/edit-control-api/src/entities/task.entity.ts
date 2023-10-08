import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Submission } from './submission.entity';
import { TaskVideo } from './taskvideo.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('identity')
  @ApiProperty({ description: 'The unique identifier of the task' })
  id: number;

  @Column()
  @ApiProperty({ description: 'The name of the task' })
  name: string;

  @Column({nullable:true})
  @ApiProperty({ description: 'The turnaround time for the task' })
  turnAroundTime: Date;

  @Column({nullable:true})
  @ApiProperty({ description: 'The go-live date for the task' })
  goLiveDate: Date;

  @Column({nullable:true})
  @ApiProperty({
    description: 'The title of the video associated with the task',
  })
  videoTitle: string;

  @Column({nullable:true})
  @ApiProperty({
    description: 'The description of the video associated with the task',
  })
  videoDescription: string;

  @Column({nullable:true})
  @ApiProperty({ description: 'Tags associated with the video' })
  videoTags: string;

  @OneToMany(() => TaskVideo, (taskVideo) => taskVideo.task)
  taskVideos: TaskVideo[];

  @OneToMany(() => Submission, (submission) => submission.task)
  submissions: Submission[];
}
