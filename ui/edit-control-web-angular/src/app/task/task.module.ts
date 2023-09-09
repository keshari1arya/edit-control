import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListViewComponent } from './task-list/task-list-view/task-list-view.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { TaskRoutes } from './task.routing.module';
import { RouterModule } from '@angular/router';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    TaskListComponent,
    TaskListViewComponent,
    EditTaskComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(TaskRoutes),
  ]
})
export class TaskModule { }
