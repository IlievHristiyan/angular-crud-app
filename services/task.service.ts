// task.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../common/types/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private baseUrl = '/api/tasks';


  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl);
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.baseUrl, task);
  }

  updateTask(task: Task): Observable<Task> {
    const url = `${this.baseUrl}/${task.id}`;
    return this.http.put<Task>(url, task);
  }

  deleteTask(taskId: number): Observable<void> {
    const url = `${this.baseUrl}/${taskId}`;
    return this.http.delete<void>(url);
  }
}
