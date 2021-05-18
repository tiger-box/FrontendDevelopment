import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TaskService} from '../../services/task/task.service';
import {Task} from '../../models/task.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})

export class AddTaskComponent implements OnInit {

  // @ts-ignore
  public addTaskForm: FormGroup;

  constructor(private taskService: TaskService, private router: Router) {
  }

  private createForm(): void {
    this.addTaskForm = new FormGroup({
      name: new FormControl(null),
      description: new FormControl(null)
    });
  }

  public onSubmit(): void {
    this.taskService.addTask(new Task(this.addTaskForm.value.name, this.addTaskForm.value.description));

    this.router.navigate(['']).then(r => {});
  }

  ngOnInit(): void {
    this.createForm();
  }
}
