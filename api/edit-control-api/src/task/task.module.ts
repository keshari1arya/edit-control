import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { Task } from 'src/entities/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskVideo } from 'src/entities/taskvideo.entity';
import { Submission } from 'src/entities/submission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task, TaskVideo, Submission])],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
