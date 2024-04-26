import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { Task } from '../../../../../common/types/task.model';

// // Get complete state of the favorites products in application
// export const selectAppState = createFeatureSelector<AppState>('favorite');

// // get All favorites products
// export const selectProducts = createSelector(
//   selectAppState,
//   (state: AppState) => state.tasks
// );

// // get One favorite product by ID
// export const selectProductById = createSelector(
//   selectProducts,
//   (tasks: Task[], props: { taskId: string }) =>
//     tasks.find((task) => task.id === props.taskId)
// );

export const selectTasks = (state: AppState) => state.tasks;

export const selectTaskById = (id: string) =>
  createSelector(selectTasks, (tasks) => tasks.find((task) => task.id === id));
