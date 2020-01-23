import { Injectable } from '@angular/core';
import { CourseService } from 'src/app/core/services/course.service';
import { Router } from '@angular/router';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import {
  reloadAll,
  reloadAllSuccess,
  find,
  add,
  update,
  loadNextPage,
  loadNextPageSuccess,
  loadNextPageFailure,
  addSuccess,
  addFailure,
  openDeleteModal,
  openDeleteModalSuccess,
  openDeleteModalFailure,
  deleteById,
  deleteByIdSuccess,
  deleteByIdFailure,
  getUpdated,
  getUpdatedSuccess,
  getUpdatedFailure,
  updateSuccess,
  updateFailure
} from '../actions/course.actions';
import { withLatestFrom, concatMap, map, switchMap, tap, catchError } from 'rxjs/operators';
import { AppState } from '../states/app.state';
import { Store, select } from '@ngrx/store';
import { COURSE_PAGE_ORDER, COURSE_PER_PAGE, COURSE_LOAD_FROM } from 'src/app/core/constants/constants';
import { of } from 'rxjs/internal/observable/of';
import { selectCourse, selectUpdatedId } from '../selectors/course.selectors';
import { ModalService } from 'src/app/core/services/modal.service';

@Injectable()
export class CourseEffects {
  constructor(
    private actions: Actions,
    private courseService: CourseService,
    private router: Router,
    private store: Store<AppState>,
    private modalService: ModalService
  ) { }

  reloadAll = createEffect(() => this.actions.pipe(
    ofType(reloadAll),
    concatMap(action => of(action).pipe(
      withLatestFrom(this.store.pipe(select(selectCourse))))
    ),
    switchMap(([, state]) => this.courseService.getAll(COURSE_LOAD_FROM, state.ids.length, COURSE_PAGE_ORDER, state.filter).pipe(
      map(pagination => reloadAllSuccess({ pagination })),
      catchError(error => of(loadNextPageFailure({ error })))
    ))
  ));

  loadNextPage = createEffect(() => this.actions.pipe(
    ofType(find, loadNextPage),
    concatMap(action => of(action).pipe(
      withLatestFrom(this.store.pipe(select(selectCourse))))
    ),
    switchMap(([, state]) => this.courseService.getAll(state.ids.length, COURSE_PER_PAGE, COURSE_PAGE_ORDER, state.filter).pipe(
      map(pagination => loadNextPageSuccess({ pagination })),
      catchError(error => of(loadNextPageFailure({ error })))
    ))
  ));

  add = createEffect(() => this.actions.pipe(
    ofType(add),
    switchMap(action => this.courseService.add(action.course).pipe(
      map(() => addSuccess()),
      catchError(error => of(addFailure({ error })))
    ))
  ));

  addSuccess = createEffect(() => this.actions.pipe(
    ofType(addSuccess),
    map(() => reloadAll()),
    tap(() => this.router.navigateByUrl('/'))
  ));

  getUpdated = createEffect(() => this.actions.pipe(
    ofType(getUpdated),
    concatMap(action => of(action).pipe(
      withLatestFrom(this.store.pipe(select(selectUpdatedId)))
    )),
    switchMap(([, updatedId]) => this.courseService.getById(+updatedId).pipe(
      map(updated => getUpdatedSuccess({ updated })),
      catchError(error => of(getUpdatedFailure({ error })))
    ))
  ));

  update = createEffect(() => this.actions.pipe(
    ofType(update),
    switchMap(action => this.courseService.update(action.course).pipe(
      map(() => updateSuccess()),
      catchError(error => of(updateFailure({ error })))
    ))
  ));

  updateSuccess = createEffect(() => this.actions.pipe(
    ofType(updateSuccess),
    map(() => reloadAll()),
    tap(() => this.router.navigateByUrl('/'))
  ));

  openDeleteModal = createEffect(() => this.actions.pipe(
    ofType(openDeleteModal),
    map(action => openDeleteModalSuccess({ id: action.id })),
    catchError(() => of(openDeleteModalFailure()))
  ));

  openDeleteModalSuccess = createEffect(() => this.actions.pipe(
    ofType(openDeleteModalSuccess),
    tap(action => this.modalService.open('course-delete-modal', action.id))
  ), { dispatch: false });

  deleteById = createEffect(() => this.actions.pipe(
    ofType(deleteById),
    switchMap(action => this.courseService.deleteById(action.id).pipe(
      tap(() => this.modalService.close('course-delete-modal')),
      map(() => deleteByIdSuccess()),
      catchError(error => of(deleteByIdFailure({ error })))
    ))
  ));

  deleteByIdSuccess = createEffect(() => this.actions.pipe(
    ofType(deleteByIdSuccess),
    map(() => reloadAll())
  ));
}
