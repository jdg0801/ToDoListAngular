import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  imports: [],
  templateUrl: './todolist.html',
  styleUrl: './todolist.css'
})
export class Todolist {
    taskName= "Task1";
    taskDescription = "taskDescription";
    completedOrNot = false;
}
