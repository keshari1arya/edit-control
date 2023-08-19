import { Task } from 'src/entities/task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Submission } from 'src/entities/submission.entity';

export class TaskService {
  constructor(
    @InjectRepository(Task) private readonly taskRepository: Repository<Task>,
    @InjectRepository(Task)
    private readonly submissionRepository: Repository<Submission>,
  ) {}

  async createTask(taskData: Partial<Task>) {
    const task = this.taskRepository.create(taskData);
    await this.taskRepository.save(task);
    return task;
  }

  async updateTask(taskId: number, taskData: Partial<Task>) {
    await this.taskRepository.update(taskId, taskData);
    const updatedTask = await this.taskRepository.findOne({
      where: { id: taskId },
    });
    await this.taskRepository.save(updatedTask);
    return updatedTask;
  }

  async deleteTask(taskId: number) {
    const task = await this.taskRepository.findOne({
      where: { id: taskId },
    });
    await this.taskRepository.remove(task);
  }

  async getTaskById(taskId: number) {
    const task = await this.taskRepository.findOne({
      where: { id: taskId },
    });
    return task;
  }

  async getAllTasks() {
    return this.taskRepository.find();
  }

  async getAllSubmissions(taskId: number) {
    return await this.submissionRepository.find({
      where: {
        task: {
          id: taskId,
        },
      },
    });
  }

  async createSubmission(taskId: number, submission: Submission) {
    await this.submissionRepository.create(submission);
    await this.submissionRepository.save(submission);
    return submission;
  }

  async commentSubmission(
    taskId: number,
    submissionId: number,
    comment: string,
  ) {
    const submission = await this.submissionRepository.findOneOrFail({
      where: { id: submissionId },
    });
    submission.comment = comment;
    await this.submissionRepository.update(submissionId, submission);
    await this.submissionRepository.save(submission);
    return submission;
  }
}
