import { Injectable } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import {Subject, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private tasks: Task[] =
  [
    new Task('Завтрак', ''),
    new Task('Проверить анкеты', 'Проверить анкеты сотрудников'),
    new Task('Уборка', 'Сделать уборку в доме'),
    new Task('Прочитать книгу', 'Прочитать книгу "Странствия о драконах"')
  ];

  public subject = new Subject<Task>();

  constructor() {
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
    this.subject.next(task);
  }
}
