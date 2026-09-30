import { Component, inject, input, output } from '@angular/core';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';
import { Task } from '../../task.model';
import { Store } from '@ngrx/store';
import { tasksActions } from '../../store/tasks.actions';
@Component({
  selector: 'app-task-card',
  imports: [ToggleSwitchModule, FormsModule],
  templateUrl: './task-card.html',
  styleUrl: './task-card.scss',
})
export class TaskCard {
  task = input<Task>({} as Task);
  _store = inject(Store);

  toggle() {
    this._store.dispatch(
      tasksActions.toggle({ taskID: this.task()._id, completedStatus: this.task().completed! }),
    );
  }

  deleteTask() {
    this._store.dispatch(tasksActions.deleteTask({ taskID: this.task()._id }));
  }
}
