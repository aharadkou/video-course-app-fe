import { createAction, props } from '@ngrx/store';
import { Author } from 'src/app/core/entities/course/author.model';

export const loadFiltered = createAction(
  '[Author] Load filtered',
  props<{ filter: string, selectedIds: number[] }>()
);

export const loadFilteredSuccess = createAction(
  '[Author] Load filtered success',
  props<{ authors: Author[] }>()
);

export const loadFilteredFailure = createAction(
  '[Author] Load filtered failure',
  props<{ error: any }>()
);


export const clearFiltered = createAction(
  '[Author] Clear filtered'
);
