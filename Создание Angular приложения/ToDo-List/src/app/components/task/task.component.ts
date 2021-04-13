import { Component, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  tasks: Task[];
  
  constructor(private taskService: TaskService) { 
    this.tasks = [{name: "Завтрак", description: ""},
                  {name: "Проверить анкеты", description: "Проверить анкеты сотрудников"},
                  {name: "Уборка", description: "Сделать уборку в доме"},
                  {name: "Прочитать книгу", description: "Прочитать книгу \"Странствия о драконах\""}];
  }

  ngOnInit(): void {
  }

}
