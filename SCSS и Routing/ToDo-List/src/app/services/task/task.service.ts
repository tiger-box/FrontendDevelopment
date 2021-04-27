import { Injectable } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[];

  constructor() {
    this.tasks =
    [
      {name: 'Завтрак', description: ''},
      {name: 'Проверить анкеты', description: 'Проверить анкеты сотрудников'},
      {name: 'Уборка', description: 'Сделать уборку в доме'},
      {name: 'Прочитать книгу', description: 'Прочитать книгу "Странствия о драконах"'}
    ];
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }
}
