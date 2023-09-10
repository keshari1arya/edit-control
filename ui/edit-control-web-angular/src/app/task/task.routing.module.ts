import { Routes } from "@angular/router";
import { TaskListComponent } from "./task-list/task-list.component";
import { EditTaskComponent } from "./edit-task/edit-task.component";
import { TaskDetailsComponent } from "./task-details/task-details.component";

export const TaskRoutes: Routes = [
  {
    path: '',
    component: TaskListComponent,
    data: {
      title: 'Starter Page',
    },
  },
  {
    path: 'new',
    component: EditTaskComponent,
    data:{
      title:'Create'
    }
  },
  {
    path: 'edit/:id', // Route with an "id" parameter for editing
    component: EditTaskComponent,
    data: {
      title: 'Edit Task',
      isEditMode: true, // Indicate that it's an edit mode
    },
  },
  {
    path: ':id', // Route with an "id" parameter for editing
    component: TaskDetailsComponent,
    data: {
      title: 'Task Details',
    },
  },
];