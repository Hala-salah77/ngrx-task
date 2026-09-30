import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Task, TaskFilter, TaskState } from '../task.model';

const featureName = 'tasks_feature';

const tasksFeatureSelector = createFeatureSelector<TaskState>(featureName);

export const selectTasks = createSelector(tasksFeatureSelector, (state) => state.tasks);

export const selectFilter = createSelector(tasksFeatureSelector, (state) => state.filter);

export const selectFilterdTasks = createSelector(
  selectTasks,
  selectFilter,
  (tasks: Task[], filter: TaskFilter) => {
    return tasks.filter((task) => {
      if (filter === 'completed') return task.completed;
      if (filter === 'pending') return !task.completed;
      return true;
    });
  },
);

export const selectLoading = createSelector(tasksFeatureSelector, (state) => state.isLoading);

export const selectError = createSelector(tasksFeatureSelector, (state) => state.error);
