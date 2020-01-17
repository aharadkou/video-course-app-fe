import { createAction, props } from '@ngrx/store';
import { UserCredentials } from 'src/app/core/entities/user/user-credentials';

export const login = createAction(
  '[Authentication] Login',
  props<{ credentials: UserCredentials }>()
);

export const loginSuccess = createAction(
  '[Authentication] Login Success',
  props<{ token: string, user: UserCredentials }>()
);

export const loginFailure = createAction(
  '[Authentication] Login Failure',
  props<{ error: any }>()
);


export const logout = createAction(
  '[Authentication] Logout'
);

export const logoutSuccess = createAction(
  '[Authentication] Logout success'
);

export const logoutFailure = createAction(
  '[Authentication] Logout failure'
);
