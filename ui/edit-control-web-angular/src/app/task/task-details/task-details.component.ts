import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { ITask } from 'src/app/models/ITask';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  task: ITask | undefined;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    // Get the task ID from the route parameter
    const taskId = this.route.snapshot.paramMap.get('id');

    if (taskId) {
      // Fetch task details from the API based on the task ID
      this.taskService.getTaskById(+taskId).subscribe(
        (task) => {
          this.task = task;
        },
        (error) => {
          console.error('Error fetching task details:', error);
        }
      );
    }
  }

  allFiles: File[] = [];

  droppedFiles(allFiles:any): void {
    const filesAmount = allFiles.length;
    for (let i = 0; i < filesAmount; i++) {
      const file = allFiles[i];
      this.allFiles.push(file);
    }
  }
}
