import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TaskService } from '../task';

@Component({
  selector: 'app-task-list',
  imports: [RouterLink],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  constructor(public taskService: TaskService) {}
}
