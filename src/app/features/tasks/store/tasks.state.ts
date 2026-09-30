import { TaskState } from '../task.model';

export const initialTaskState: TaskState = {
  tasks: [],
  isLoading: false,
  error: null,
  filter: 'all',
};
