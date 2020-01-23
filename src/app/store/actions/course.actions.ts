import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/core/entities/course/course.model';
import { CoursePagination } from 'src/app/core/entities/course/course-pagination.model';

export const reloadAll = createAction(
  '[Course] Reload all'
);

export const reloadAllSuccess = createAction(
  '[Course] Reload all success',
  props<{ pagination: CoursePagination }>()
);

export const reloadAllFailure = createAction(
  '[Course] Reload all failure',
  props<{ error: any }>()
);


export const loadNextPage = createAction(
  '[Course] Load next page'
);

export const loadNextPageSuccess = createAction(
  '[Course] Load next page success',
  props<{ pagination: CoursePagination }>()
);

export const loadNextPageFailure = createAction(
  '[Course] Load next page failure',
  props<{ error: any }>()
);


export const find = createAction(
  '[Course] Find',
  props<{ filter: string }>()
);


export const openDeleteModal = createAction(
  '[Course] Open delete modal',
  props<{ id: number }>()
);

export const openDeleteModalSuccess = createAction(
  '[Course] Open delete modal success',
  props<{ id: number }>()
);

export const openDeleteModalFailure = createAction(
  '[Course] Open delete modal failure',
  (errorMessage = 'Unable to delete course!') => ({ errorMessage })
);


export const deleteById = createAction(
  '[Course] Delete by id',
  props<{ id: number }>()
);

export const deleteByIdSuccess = createAction(
  '[Course] Delete by id success'
);

export const deleteByIdFailure = createAction(
  '[Course] Delete by id failure',
  props<{ error: any }>()
);


export const add = createAction(
  '[Course] Add',
  props<{ course: Course }>()
);

export const addSuccess = createAction(
  '[Course] Add success'
);

export const addFailure = createAction(
  '[Course] Add failure',
  props<{ error: any }>()
);


export const update = createAction(
  '[Course] Update',
  props<{ course: Course }>()
);

export const updateSuccess = createAction(
  '[Course] Update success'
);

export const updateFailure = createAction(
  '[Course] Update failure',
  props<{ error: any }>()
);


export const getUpdated = createAction(
  '[Course] Get updated course'
);

export const getUpdatedSuccess = createAction(
  '[Course] Get updated success',
  props<{ updated: Course }>()
);

export const getUpdatedFailure = createAction(
  '[Course] Get updated failure',
  props<{ error: any }>()
);
