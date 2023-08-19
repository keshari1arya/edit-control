import { Task } from './task.entity';
import { Video } from './video.entity';
export declare class Submission {
    id: number;
    video: Video;
    isApproved: boolean;
    comment: string;
    task: Task;
}
