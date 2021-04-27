import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskComponent} from './components/task/task.component';
import {TaskListComponent} from './components/taskList/task-list.component';

const routes: Routes = [
  {path: '', component: TaskListComponent},
  {path: 'task/:id', component: TaskComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
