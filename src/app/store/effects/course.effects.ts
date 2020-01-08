import { Injectable } from '@angular/core';
import { CourseService } from 'src/app/core/services/course.service';
import { Router } from '@angular/router';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { loadPaged, loadPagedSuccess, loadMore, find, add, update, deleteByIdComplete, deleteById } from '../actions/course.actions';
import { withLatestFrom, concatMap, map, switchMap, tap } from 'rxjs/operators';
import { AppState } from '../states/app.state';
import { Store, select } from '@ngrx/store';
import { COURSE_PAGE_ORDER } from 'src/app/core/constants/constants';
import { of } from 'rxjs/internal/observable/of';
import { selectCourse } from '../selectors/course.selectors';
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

  loadPaged = createEffect(() => this.actions.pipe(
    ofType(loadPaged, loadMore, find),
    concatMap(action => of(action).pipe(
      withLatestFrom(this.store.pipe(select(selectCourse))))
    ),
    switchMap(([, state]) => this.courseService.getAll(state.loadFrom, state.loadCount, COURSE_PAGE_ORDER, state.filter)),
    map(pagination => loadPagedSuccess({ pagination }))
  ));

  add = createEffect(() => this.actions.pipe(
    ofType(add),
    switchMap(action => this.courseService.add(action.course)),
    tap(() => this.router.navigateByUrl('/'))
  ), { dispatch: false });

  update = createEffect(() => this.actions.pipe(
    ofType(update),
    tap(() => this.router.navigateByUrl('/')),
    switchMap(action => this.courseService.update(action.course))
  ), { dispatch: false });

  deleteById = createEffect(() => this.actions.pipe(
    ofType(deleteById),
    tap(action => this.modalService.open('course-delete-modal', action.id))
  ), { dispatch: false });

  deleteByIdComplete = createEffect(() => this.actions.pipe(
    ofType(deleteByIdComplete),
    switchMap(action => this.courseService.deleteById(action.id)),
    tap(() => this.modalService.close('course-delete-modal')),
    map(() => loadPaged())
  ));
}
