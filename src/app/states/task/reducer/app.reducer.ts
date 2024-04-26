// import { createReducer, on } from '@ngrx/store';
// import { add, remove, clear, updateAllState, load } from '../action/app.action';
// import { AppState } from '../app.state';

// export const initialState: AppState = {
//   tasks: [],
// };

// export const favoriteReducer = createReducer(
//   initialState,
//   on(load, (state, { tasks }) => ({
//     ...state,
//     tasks: tasks,
//   })),
//   on(add, (state, { task }) => ({
//     ...state,
//     tasks: [...state.tasks, task],
//   })),
//   on(remove, (state, { task }) => ({
//     ...state,
//     tasks: state.tasks.filter((t) => task.id != t.id),
//   })),
//   on(updateAllState, (state, { tasks }) => ({
//     ...state,
//     tasks,
//   })),
//   on(clear, (state) => initialState)
// );

import { Task } from '../../../../../common/types/task.model';
import { addTask, updateTask, deleteTask } from '../action/app.action';

export interface AppState {
  tasks: Task[];
}

export const initialState: AppState = {
  tasks: [],
};

export function taskReducer(state = initialState, action: any): AppState {
  switch (action.type) {
    case addTask.type:
      return { ...state, tasks: [...state.tasks, action.task] };
    case updateTask.type:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.task.id ? action.task : task
        ),
      };
    case deleteTask.type:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    default:
      return state;
  }
}
