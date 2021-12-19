import { Injectable } from '@angular/core';
import {Task} from '../../app/components/Task';
import {TASKS} from '../../app/components/mock-tasks';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHandler} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = ' http://localhost:5000/tasks'

  constructor(private http:HttpClient ) {
    

   }

  getTasks(): Observable<Task[]> {
     const tasks = of(TASKS);
     return this.http.get<Task[]>(this.apiUrl)
  }
}
