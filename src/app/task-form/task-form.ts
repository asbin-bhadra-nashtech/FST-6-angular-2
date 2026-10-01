import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../task';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  title = '';
  priority: Task['priority'] = 'Medium';
  completed = false;

  constructor(
    private taskService: TaskService,
    private router: Router,
  ) {}

  addTask(): void {
    if (!this.title.trim()) {
      return;
    }

    const task: Task = {
      title: this.title.trim(),
      priority: this.priority,
      completed: this.completed,
    };

    this.taskService.addTask(task);

    this.clearForm();

    this.router.navigate(['/tasks']);
  }

  clearForm(): void {
    this.title = '';
    this.priority = 'Medium';
    this.completed = false;
  }
}
