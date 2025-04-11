import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[FormsModule]
})
export class AppComponent implements OnInit{
  
  title = 'angular-testing-project';
  tasks: string[] = [];
  newTask:string=''
  editingTask:string=''
  index:number=-1
  ngOnInit(): void {
    this.tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')!) : [];
  }


  addTask() {
    this.tasks.push(this.newTask);
    this.newTask=''
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  deleteTask(task: string) {
    this.tasks =this.tasks.filter(t=>t!==task);
    
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  editTask(){
    if(this.index!==-1){
      this.tasks[this.index]=this.editingTask;
      this.index=-1
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }

  }

  getTasks(): string[] {
    return [];
  }
}
