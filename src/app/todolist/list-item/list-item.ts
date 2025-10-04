import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Output, EventEmitter, Input } from '@angular/core';
import { Task } from '../todolist';
//import { Todolist } from '../todolist';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-item.html',
  styleUrl: './list-item.css'
})
export class ListItem {
   taskName: string='';
    taskDescription: string ="";
    taskSaved: boolean = false;

    @Input() taskIndex: number = 1;
    @Output() taskAdded = new EventEmitter<Task>();
    
    onSubmit() {
      const newTask: Task = {
         taskName: this.taskName,
         taskDescription: this.taskDescription,
         taskSaved: false
       };
        this.taskAdded.emit(newTask);
       alert('Task Added!'); 
       //this.resetForm();

        this.taskSaved = true;
      }

     resetForm(){
      this.taskName='';
      this.taskDescription='';
     } 
}
