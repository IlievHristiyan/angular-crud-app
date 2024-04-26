// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { EMPTY } from 'rxjs';
// import { map, exhaustMap, catchError } from 'rxjs/operators';
// import * as TaskActions from '../action/app.action'
// import { TaskService } from './movies.service';

// @Injectable()
// export class TaskEffects {

//   loadTasks$ = createEffect(() => this.actions$.pipe(
//     ofType(TaskActions.),
//     exhaustMap(() => this.moviesService.getAll()
//       .pipe(
//         map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
//         catchError(() => EMPTY)
//       ))
//     )
//   );

//   constructor(
//     private actions$: Actions,
//     private taskService: TaskService
//   ) {}
// }
