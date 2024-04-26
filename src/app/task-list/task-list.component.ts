import { Component } from '@angular/core';
import {
  /* . . . */
  NgFor,
  /* . . . */
} from '@angular/common';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {}
