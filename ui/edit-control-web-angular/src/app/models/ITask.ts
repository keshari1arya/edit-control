import { ISubmission } from "./ISubmission";
import { ITaskVideo } from "./ITaskVideo";

// itask.interface.ts
export interface ITask {
    id?: number;
    name: string;
    turnAroundTime?: Date;
    goLiveDate?: Date;
    videoTitle?: string;
    videoDescription?: string;
    videoTags?: string;
    taskVideos?: ITaskVideo[];
    submissions?: ISubmission[];
}
