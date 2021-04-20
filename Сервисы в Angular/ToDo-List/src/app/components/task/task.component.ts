import { Component, OnInit, Output } from '@angular/core';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  providers: [TaskService]
})
export class TaskComponent implements OnInit {
  public tasks: any;
  
  constructor(private taskService: TaskService) {
    this.tasks = taskService.getTasks();
  }

  ngOnInit(): void { }
}
