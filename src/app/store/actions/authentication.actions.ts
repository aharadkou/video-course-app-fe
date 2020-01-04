import { createAction, props } from '@ngrx/store';
import { UserCredentials } from 'src/app/core/entities/user/user-credentials';

export const login = createAction(
  '[Authentication] Login',
  props<{ credentials: UserCredentials }>()
);

export const loginSuccess = createAction(
  '[Authentication] Login Success',
  props<{ token: string }>()
);

export const loginComplete = createAction(
  '[Authentication] Login Complete',
  props<{ credentials: UserCredentials }>()
);

export const loginFailure = createAction(
  '[Authentication] Login Failure',
  props<{ error: any }>()
);

export const logout = createAction(
  '[Authentication] Logout'
);
