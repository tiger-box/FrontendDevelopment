import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskService} from '../../services/task/task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent implements OnInit {

  public tasks: any;

  constructor(private taskService: TaskService) {
    this.tasks = taskService.getTasks();
  }

  ngOnInit(): void {
  }
}
