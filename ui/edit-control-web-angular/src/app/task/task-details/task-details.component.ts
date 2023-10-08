import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { ITask } from 'src/app/models/ITask';
import { VideoService } from 'src/app/services/video.service';
import { ISubmission } from 'src/app/models/ISubmission';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  task: ITask | undefined;
  allFiles: File[] = [];
  displayedColumns: string[] = ['id', 'comment', 'isApproved'];
  dataSource: any;
  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private videoService: VideoService,
  ) { }

  ngOnInit() {
    // Get the task ID from the route parameter
    const taskId = this.route.snapshot.paramMap.get('id');

    if (taskId) {
      // Fetch task details from the API based on the task ID
      this.taskService.getTaskById(+taskId).subscribe(
        (task) => {
          this.task = task;
          if (task?.submissions)
            this.dataSource = new MatTableDataSource<ISubmission>(task?.submissions);
        },
        (error) => {
          console.error('Error fetching task details:', error);
        }
      );
    }
  }


  droppedFiles(allFiles: any): void {
    this.addFiles(allFiles);
  }

  private addFiles(allFiles: any) {
    const filesAmount = allFiles?.length;
    for (let i = 0; i < filesAmount; i++) {
      const file = allFiles[i];
      this.allFiles.push(file);
    }
  }

  upload() {
    this.videoService.upload(this.task?.id!, this.allFiles);
  }
  onFileSelected(event: any) {
    this.addFiles(event?.target?.files)
  }
}
