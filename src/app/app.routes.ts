import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'tasks',
    loadComponent: () => import('./task-list/task-list').then((m) => m.TaskList),
  },
  {
    path: 'add-task',
    loadComponent: () => import('./task-form/task-form').then((m) => m.TaskForm),
  },
];
