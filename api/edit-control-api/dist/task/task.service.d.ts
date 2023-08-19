import { Task } from 'src/entities/task.entity';
import { Repository } from 'typeorm';
import { Submission } from 'src/entities/submission.entity';
export declare class TaskService {
    private readonly taskRepository;
    private readonly submissionRepository;
    constructor(taskRepository: Repository<Task>, submissionRepository: Repository<Submission>);
    createTask(taskData: Partial<Task>): Promise<Task>;
    updateTask(taskId: number, taskData: Partial<Task>): Promise<Task>;
    deleteTask(taskId: number): Promise<void>;
    getTaskById(taskId: number): Promise<Task>;
    getAllTasks(): Promise<Task[]>;
    getAllSubmissions(taskId: number): Promise<Submission[]>;
    createSubmission(taskId: number, submission: Submission): Promise<Submission>;
    commentSubmission(taskId: number, submissionId: number, comment: string): Promise<Submission>;
}
