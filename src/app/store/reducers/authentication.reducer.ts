import { createReducer, on, Action } from '@ngrx/store';
import { inititalState, AuthenticationState } from '../states/authentication.state';
import { loginSuccess, loginFailure, logout } from '../actions/authentication.actions';
import { UNKNOWN_ERROR } from 'src/app/core/constants/constants';

const authenticationReducer = createReducer(
  inititalState,
  on(loginSuccess, (state, { token, user }) => {
    return {
      errorMessage: null,
      user,
      token,
    };
  }),
  on(loginFailure, (state, { error }) => {
    return {
      ...state,
      errorMessage: error.error.message || UNKNOWN_ERROR
    };
  }),
  on(logout, () => {
    return {
      user: null,
      errorMessage: null,
      token: null
    };
  })
);

export function reducer(state: AuthenticationState, action: Action) {
  return authenticationReducer(state, action);
}
