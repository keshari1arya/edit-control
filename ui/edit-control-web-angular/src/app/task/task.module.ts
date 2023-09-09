import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListViewComponent } from './task-list/task-list-view/task-list-view.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { TaskRoutes } from './task.routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TaskListComponent,
    TaskListViewComponent
  ],
  imports: [
    CommonModule, MatTableModule, MatPaginatorModule, RouterModule.forChild(TaskRoutes),
  ]
})
export class TaskModule { }
