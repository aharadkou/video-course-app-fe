import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/core/entities/course/course.model';
import { CoursePagination } from 'src/app/core/entities/course/course-pagination.model';

export const loadPaged = createAction(
  '[Course] Load paged'
);

export const loadPagedSuccess = createAction(
  '[Course] Load paged success',
  props<{ pagination: CoursePagination }>()
);

export const loadMore = createAction(
  '[Course] Load more'
);

export const find = createAction(
  '[Course] Find',
  props<{ filter: string }>()
);

export const deleteById = createAction(
  '[Course] Delete by id',
  props<{ id: number }>()
);

export const deleteByIdComplete = createAction(
  '[Course] Delete by id complete',
  props<{ id: number }>()
);

export const add = createAction(
  '[Course] Add',
  props<{ course: Course }>()
);

export const update = createAction(
  '[Course] Update'
);

export const updateGetCourse = createAction(
  '[Course] Update get course',
  props<{ course: Course }>()
);

export const updateComplete = createAction(
  '[Course] Update complete',
  props<{ course: Course }>()
);

export const updateReplaceOld = createAction(
  '[Course] Update replace old',
  props<{ course: Course }>()
);
