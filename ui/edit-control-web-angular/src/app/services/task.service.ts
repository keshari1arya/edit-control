import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { ITask } from "../models/ITask";

@Injectable({ providedIn: 'root' })
export class TaskService {

    public apiUrl = "http://localhost:3010/api/"

    constructor(private http: HttpClient) { }

    public getTasks() {
        return this.http.get<ITask[]>(this.apiUrl + 'tasks')
    }


}
