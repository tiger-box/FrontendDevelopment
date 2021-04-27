import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskService} from 'src/app/services/task/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  providers: [TaskService]
})
export class TaskComponent implements OnInit {
  @Input()
  public selectedTask: number;
  public task: any;

  constructor(private taskService: TaskService, private router: Router, private activeRoute: ActivatedRoute) {
    this.selectedTask = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.task = taskService.getTasks()[this.selectedTask];
  }

  ngOnInit(): void { }
}
