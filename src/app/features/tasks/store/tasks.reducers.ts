import { createReducer, on } from '@ngrx/store';
import { initialTaskState } from './tasks.state';
import { tasksActions } from './tasks.actions';

export const tasksReducer = createReducer(
  initialTaskState,
  on(tasksActions.loadTasks, (state) => ({
    ...state,
    isLoading: true,
  })),

  on(tasksActions.loadSuccess, (state, { tasks }) => ({
    ...state,
    tasks,
    isLoading: false,
  })),

  on(tasksActions.loadFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),

  on(tasksActions.toggle, (state) => ({
    ...state,
    isLoading: true,
  })),

  on(tasksActions.toggleSuccess, (state, { task }) => ({
    ...state,
    isLoading: false,
    tasks: state.tasks.map((t) => (t._id === task._id ? task : t)),
  })),

  on(tasksActions.toggleFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(tasksActions.setFilter, (state, { filter }) => ({
    ...state,
    filter,
  })),

  on(tasksActions.addTask, (state) => ({
    ...state,
    isLoading: true,
  })),

  on(tasksActions.addSuccess, (state, { task }) => ({
    ...state,
    isLoading: false,
    tasks: [task, ...state.tasks],
  })),

  on(tasksActions.addFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),

  on(tasksActions.deleteTask, (state) => ({
    ...state,
    isLoading: true,
  })),

  on(tasksActions.deleteSuccess, (state, { taskID }) => ({
    ...state,
    isLoading: false,
    tasks: state.tasks.filter((t) => t._id !== taskID),
  })),

  on(tasksActions.deleteFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
);
