import { ITask } from "./ITask";
import { IVideo } from "./IVideo";

// isubmission.interface.ts

export interface ISubmission {
    id: number;
    video: IVideo;
    isApproved: boolean;
    comment?: string;
    task: ITask;
}
