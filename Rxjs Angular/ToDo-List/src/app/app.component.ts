import {Component, OnDestroy, OnInit} from '@angular/core';
import {TaskService} from './services/task/task.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TaskService]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Список дел';

  // @ts-ignore
  public subscription: Subscription;

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.subscription = this.taskService.subject.subscribe(value => {
      console.log('Add task ', value);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
