import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { TaskList } from '../../components/task-list/task-list';
import { FilterButtonsGroup } from '../../components/filter-buttons-group/filter-buttons-group';
import { AddTask } from '../../components/add-task/add-task';
import { selectError, selectLoading } from '../../store/tasks.selectors';

@Component({
  selector: 'app-tasks-view',
  imports: [TaskList, FilterButtonsGroup, AddTask, AsyncPipe],
  templateUrl: './tasks-view.html',
  styleUrl: './tasks-view.scss',
})
export class TasksView {
  private _store = inject(Store);
  loading$ = this._store.select(selectLoading);
  error$ = this._store.select(selectError);
}
