import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TaskDescriptionFormatPipe, TaskNameFormatPipe} from './format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    AddTaskComponent,
    TaskDescriptionFormatPipe,
    TaskNameFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
