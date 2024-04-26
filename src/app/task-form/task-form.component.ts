import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app/states/task/reducer/app.reducer';
import { addTask } from '../states/task/action/app.action';
import { CommonModule } from '@angular/common';
import { Task } from '../../../common/types/task.model';
import { selectTasks } from '../states/task/selector/app.selector';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  tasks: Task[] = [];
  constructor(private store: Store<AppState>) {
    this.store.select(selectTasks).subscribe((tasks) => (this.tasks = tasks));
  }
  task = { title: '', description: '' };

  onSubmit() {
    console.log('title:', this.task.title);
    console.log('description:', this.task.description);
    this.addNewTask();
  }

  addNewTask() {
    console.log('tuk sam');

    const newTask: Task = {
      title: this.task.title,
      description: this.task.description,
    };
    this.store.dispatch(addTask({ task: newTask }));
    this.task = { title: '', description: '' };
    fetch('/api/post-task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    });
  }
}
