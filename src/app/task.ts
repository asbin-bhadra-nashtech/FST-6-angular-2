import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks = [...this.tasks, task];
  }

  toggleTask(index: number): void {
    this.tasks = this.tasks.map((task, currentIndex) =>
      currentIndex === index ? { ...task, completed: !task.completed } : task,
    );
  }

  getPendingTaskCount(): number {
    return this.tasks.filter((task) => !task.completed).length;
  }
}
