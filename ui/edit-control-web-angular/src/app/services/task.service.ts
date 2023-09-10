import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { ITask } from "../models/ITask";

@Injectable({ providedIn: 'root' })
export class TaskService {

    private apiUrl = "http://localhost:3010/api/"

    constructor(private http: HttpClient) { }

    public getTasks(): Observable<ITask[]> {
        return this.http.get<ITask[]>(`${this.apiUrl}tasks`);
    }

    public createTask(task: ITask): Observable<ITask> {
        return this.http.post<ITask>(`${this.apiUrl}tasks`, task);
    }

    public updateTask(task: ITask): Observable<ITask> {
        return this.http.put<ITask>(`${this.apiUrl}tasks/${task.id}`, task);
    }

    public deleteTask(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}tasks/${id}`);
    }

    public getTaskById(id: number): Observable<ITask> {
        return this.http.get<ITask>(`${this.apiUrl}tasks/${id}`);
    }
}
