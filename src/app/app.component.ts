import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { Task } from '../../common/types/task.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app/states/task/reducer/app.reducer';
import {
  addTask,
  updateTask,
  deleteTask,
} from '../app/states/task//action/app.action';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, TaskListComponent, TaskFormComponent, CommonModule],
})
export class AppComponent {
  title = 'my-app';

  tasks: Task[] = [];
  constructor(private store: Store<AppState>) {
    this.store.select('tasks').subscribe((tasks) => (this.tasks = tasks));
  }

  addNewTask() {
    const newTask: Task = {
      id: 'test' + '1',
      title: 'New Task',
      description: 'This is a new task.',
    };
    this.store.dispatch(addTask({ task: newTask }));
  }

  updateTask(task: Task) {
    const updatedTask: Task = {
      ...task,
      title: 'Updated Task',
      description: 'This task has been updated.',
    };
    this.store.dispatch(updateTask({ task: updatedTask }));
  }

  deleteTask(id: string) {
    this.store.dispatch(deleteTask({ id }));
  }
}
