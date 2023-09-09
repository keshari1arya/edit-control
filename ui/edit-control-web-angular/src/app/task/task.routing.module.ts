import { Routes } from "@angular/router";
import { TaskListComponent } from "./task-list/task-list.component";

export const TaskRoutes: Routes = [
    {
      path: '',
      component: TaskListComponent,
      data: {
        title: 'Starter Page',
      },
    },
  ];