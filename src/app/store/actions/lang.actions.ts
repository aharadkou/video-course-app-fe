import { createAction, props } from '@ngrx/store';

export const changeLang = createAction(
  '[Lang] Change lang',
  props<{ lang: string }>()
);

export const changeLangSuccess = createAction(
  '[Lang] Change lang success',
  props<{ lang: string }>()
);

export const changeLangFailure = createAction(
  '[Lang] Change lang failure'
);
