import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskComponent} from './components/task/task.component';
import {TaskListComponent} from './components/task-list/task-list.component';
import {AddTaskComponent} from './components/add-task/add-task.component';

const routes: Routes = [
  {path: '', component: TaskListComponent},
  {path: 'task/:id', component: TaskComponent},
  {path: 'addtask', component: AddTaskComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
