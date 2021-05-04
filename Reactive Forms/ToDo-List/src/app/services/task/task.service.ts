import { Injectable } from '@angular/core';
import { Task } from 'src/app/models/task.model';

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

  constructor() {
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }
}
