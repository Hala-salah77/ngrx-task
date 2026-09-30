import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Task, TaskFilter } from '../task.model';

// export const loadTasks = createAction('[Tasks] Load Tasks');

export const tasksActions = createActionGroup({
  source: 'Tasks',
  events: {
    'Load Tasks': emptyProps(),
    'Load Success': props<{ tasks: Task[] }>(),
    'Load Failure': props<{ error: string }>(),
    Toggle: props<{ taskID: string; completedStatus: boolean }>(),
    'Toggle Success': props<{ task: Task }>(),
    'Toggle Failure': props<{ error: string }>(),
    'Set Filter': props<{ filter: TaskFilter }>(),
    'Add Task': props<{ title: string; user?: string }>(),
    'Add Success': props<{ task: Task }>(),
    'Add Failure': props<{ error: string }>(),
    'Delete Task': props<{ taskID: string }>(),
    'Delete Success': props<{ taskID: string }>(),
    'Delete Failure': props<{ error: string }>(),
  },
});
