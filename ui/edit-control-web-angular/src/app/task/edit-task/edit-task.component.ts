import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ITask } from 'src/app/models/ITask';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  public myform: FormGroup;
  public isEditMode: boolean = false;
  public taskId: number | undefined;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.myform = fb.group({
      name: ['', [Validators.required]],
      videoTitle: ['', [Validators.minLength(5)]]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.taskId = params['id'];
      if (this.taskId) {
        // Edit mode
        this.isEditMode = true;
        this.taskService.getTaskById(this.taskId).subscribe(
          (task) => {
            this.myform.patchValue(task);
          },
          (error) => {
            console.error('Error fetching task:', error);
          }
        );
      } else {
        // Create mode
        this.isEditMode = false;
      }
    });
  }

  submitForm() {
    if (this.myform.valid) {
      const formData = this.myform.value;
      const taskData: ITask = {
        name: formData.name,
        videoTitle: formData.videoTitle,
        // Add other properties as needed
      };

      if (this.isEditMode && this.taskId) {
        // Edit mode
        taskData.id = this.taskId;
        this.taskService.updateTask(taskData).subscribe(
          (response) => {
            console.log('Task updated successfully:', response);
            this.router.navigate(['/task']);
          },
          (error) => {
            console.error('Error updating task:', error);
          }
        );
      } else {
        // Create mode
        this.taskService.createTask(taskData).subscribe(
          (response) => {
            console.log('Task created successfully:', response);
            this.router.navigate(['/task']);
          },
          (error) => {
            console.error('Error creating task:', error);
          }
        );
      }
    }
  }
}
