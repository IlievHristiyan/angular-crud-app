// import { createAction, props } from '@ngrx/store';
// import { Task } from '../../../../../common/types/task.model';

// export const load = createAction('[Task] Load', props<{ tasks: Task[] }>);
// export const add = createAction('[Task] Add', props<{ task: Task }>());
// export const remove = createAction('[Task] Remove', props<{ task: Task }>());
// export const updateAllState = createAction(
//   '[Task] Update all state of favorites products',
//   props<{ tasks: Task[] }>()
// );

// export const clear = createAction('[Task] Clear');

import { createAction, props } from '@ngrx/store';
import { Task } from '../../../../../common/types/task.model';

export const addTask = createAction('[Task] Add Task', props<{ task: Task }>());
export const updateTask = createAction(
  '[Task] Update Task',
  props<{ task: Task }>()
);
export const deleteTask = createAction(
  '[Task] Delete Task',
  props<{ id: string }>()
);
