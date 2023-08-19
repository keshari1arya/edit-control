import { Submission } from './submission.entity';
import { TaskVideo } from './taskvideo.entity';
export declare class Task {
    id: number;
    name: string;
    turnAroundTime: Date;
    goLiveDate: Date;
    videoTitle: string;
    videoDescription: string;
    videoTags: string;
    taskVideos: TaskVideo[];
    submissions: Submission[];
}
