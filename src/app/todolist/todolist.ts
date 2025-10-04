import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItem } from './list-item/list-item';  // ← Add .component.ts


@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [ListItem, CommonModule],
  templateUrl: './todolist.html',
  styleUrl: './todolist.css'
})
export class Todolist {  // Keep your name
    items: Task[] = [];

    addTask(task: Task) {
        this.items.push(task);
    }

    addNewCard() {
    // Add an empty task card
    this.items.push({
      taskName: '',
      taskDescription: '',
      taskSaved: false
    });
  }

   removeLastCard() {
    if (this.items.length > 0) {
      this.items.pop();
    }
  }

    createTask(task: Task) {
      this.items.push(task);
    }    

}

export interface Task {
    taskName: string;
    taskDescription: string;
    taskSaved: boolean;
}