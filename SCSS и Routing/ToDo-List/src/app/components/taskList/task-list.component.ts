import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskService} from '../../services/task/task.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Task} from '../../models/task.model';

@Component({
  selector: 'app-tasklist',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  providers: [TaskService]
})
export class TaskListComponent implements OnInit {
  public tasks: any;

  constructor(private taskService: TaskService) {
    this.tasks = taskService.getTasks();
  }

  ngOnInit(): void {
  }
}
