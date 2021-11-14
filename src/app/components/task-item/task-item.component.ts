import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faCookie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() toggleReminder: EventEmitter<Task> = new EventEmitter();

  faCookie = faCookie;
  constructor() { }

  ngOnInit(): void {}

  onDelete(task) {
    this.deleteTask.emit(task);
  }

  onToggle(task){
    this.toggleReminder.emit(task);
  }

}
