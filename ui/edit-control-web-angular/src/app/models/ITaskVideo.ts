import { ITask } from "./ITask";
import { IVideo } from "./IVideo";

// itask-video.interface.ts

export interface ITaskVideo {
    id: number;
    task: ITask;
    video: IVideo;
}
