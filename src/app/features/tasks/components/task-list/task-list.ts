import { Component, inject, input, OnInit, output } from '@angular/core';
import { TaskCard } from '../task-card/task-card';
import { Task } from '../../task.model';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tasksActions } from '../../store/tasks.actions';
import { selectFilterdTasks } from '../../store/tasks.selectors';

@Component({
  selector: 'app-task-list',
  imports: [TaskCard, AsyncPipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList implements OnInit {
  private _store = inject(Store);
  tasks$!: Observable<Task[]>;

  getTasks() {
    this.tasks$ = this._store.select(selectFilterdTasks);
  }

  loadTasks() {
    this._store.dispatch(tasksActions.loadTasks());
  }

  ngOnInit(): void {
    this.loadTasks();
    this.getTasks();
  }
}
