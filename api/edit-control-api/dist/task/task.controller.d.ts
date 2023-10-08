import { Task } from 'src/entities/task.entity';
import { TaskService } from './task.service';
import { Submission } from 'src/entities/submission.entity';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    createTask(taskData: Partial<Task>): Promise<Task>;
    updateTask(taskId: number, taskData: Partial<Task>): Promise<Task>;
    deleteTask(taskId: number): Promise<void>;
    getTaskById(taskId: number): Promise<Task>;
    getAllTasks(): Promise<Task[]>;
    createSubmission(taskId: number, submission: Submission): Promise<Submission>;
    commentSubmission(taskId: number, submissionId: number, comment: string): Promise<Submission>;
    attachVideo(taskId: number, url: string): Promise<void>;
}
