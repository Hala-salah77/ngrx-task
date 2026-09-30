import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { tasksActions } from '../../store/tasks.actions';

@Component({
  selector: 'app-add-task',
  imports: [ReactiveFormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss',
})
export class AddTask {
  private _store = inject(Store);

  form = new FormGroup({
    title: new FormControl('', Validators.required),
  });

  submit() {
    if (this.form.valid && this.form.value.title?.trim()) {
      this._store.dispatch(tasksActions.addTask({ title: this.form.value.title.trim() }));
      this.form.reset();
    }
  }
}
