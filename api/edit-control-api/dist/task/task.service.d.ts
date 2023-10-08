import { Task } from 'src/entities/task.entity';
import { Repository } from 'typeorm';
import { Submission } from 'src/entities/submission.entity';
import { TaskVideo } from 'src/entities/taskvideo.entity';
import { Video } from 'src/entities/video.entity';
export declare class TaskService {
    private readonly taskRepository;
    private readonly submissionRepository;
    private readonly taskVideoRepository;
    private readonly videoRepository;
    constructor(taskRepository: Repository<Task>, submissionRepository: Repository<Submission>, taskVideoRepository: Repository<TaskVideo>, videoRepository: Repository<Video>);
    createTask(taskData: Partial<Task>): Promise<Task>;
    updateTask(taskId: number, taskData: Partial<Task>): Promise<Task>;
    deleteTask(taskId: number): Promise<void>;
    getTaskById(taskId: number): Promise<Task>;
    getAllTasks(): Promise<Task[]>;
    getAllSubmissions(taskId: number): Promise<Submission[]>;
    createSubmission(taskId: number, submission: Submission): Promise<Submission>;
    commentSubmission(taskId: number, submissionId: number, comment: string): Promise<Submission>;
    attachVideo(taskId: number, url: string): Promise<void>;
}
