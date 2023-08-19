import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Task } from 'src/entities/task.entity';
import { TaskService } from './task.service';
import { Submission } from 'src/entities/submission.entity';

@ApiTags('tasks')
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @ApiOperation({ summary: 'Create a task' })
  @ApiResponse({
    status: 201,
    description: 'Task created successfully',
    type: Task,
  })
  @Post()
  createTask(@Body() taskData: Partial<Task>) {
    return this.taskService.createTask(taskData);
  }

  @ApiOperation({ summary: 'Update a task by ID' })
  @ApiResponse({
    status: 200,
    description: 'Task updated successfully',
    type: Task,
  })
  @Put(':id')
  updateTask(@Param('id') taskId: number, @Body() taskData: Partial<Task>) {
    return this.taskService.updateTask(taskId, taskData);
  }

  @ApiOperation({ summary: 'Delete a task by ID' })
  @ApiResponse({ status: 200, description: 'Task deleted successfully' })
  @Delete(':id')
  deleteTask(@Param('id') taskId: number) {
    return this.taskService.deleteTask(taskId);
  }

  @ApiOperation({ summary: 'Get a task by ID' })
  @ApiResponse({ status: 200, description: 'Task found', type: Task })
  @Get(':id')
  getTaskById(@Param('id') taskId: number) {
    return this.taskService.getTaskById(taskId);
  }

  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({ status: 200, description: 'List of tasks', type: [Task] })
  @Get()
  getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @ApiOperation({ summary: 'Create a submission' })
  @ApiResponse({
    status: 201,
    description: 'Submission created successfully',
    type: Submission,
  })
  @Post(':taskId/submissions')
  createSubmission(
    @Param('taskId') taskId: number,
    @Body() submission: Submission,
  ) {
    return this.taskService.createSubmission(taskId, submission);
  }

  @ApiOperation({ summary: 'Comment on a submission' })
  @ApiResponse({
    status: 200,
    description: 'Submission commented successfully',
    type: Submission,
  })
  @Put(':taskId/submissions/:submissionId/comment')
  commentSubmission(
    @Param('taskId') taskId: number,
    @Param('submissionId') submissionId: number,
    @Body() comment: string,
  ) {
    return this.taskService.commentSubmission(taskId, submissionId, comment);
  }
}
