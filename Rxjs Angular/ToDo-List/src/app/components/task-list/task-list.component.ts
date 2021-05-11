import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskService} from '../../services/task/task.service';
import {Task} from '../../models/task.model';

@Component({
  selector: 'app-tasklist',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent implements OnInit {

  // @ts-ignore
  public tasks: Task[] = null;

  constructor(private taskService: TaskService) {
    this.tasks = taskService.getTasks();
  }

  ngOnInit(): void {
  }
}
