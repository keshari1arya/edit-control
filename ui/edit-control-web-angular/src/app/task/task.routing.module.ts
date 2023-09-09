import { Routes } from "@angular/router";
import { TaskListComponent } from "./task-list/task-list.component";
import { EditTaskComponent } from "./edit-task/edit-task.component";

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
      title:'edit'
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
];