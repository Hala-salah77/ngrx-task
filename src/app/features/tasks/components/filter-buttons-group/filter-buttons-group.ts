import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { TaskFilter } from '../../task.model';
import { tasksActions } from '../../store/tasks.actions';

@Component({
  selector: 'app-filter-buttons-group',
  imports: [],
  templateUrl: './filter-buttons-group.html',
  styleUrl: './filter-buttons-group.scss',
})
export class FilterButtonsGroup {
  private _store = inject(Store);

  setFilter(filter: TaskFilter) {
    this._store.dispatch(tasksActions.setFilter({ filter }));
  }
}
