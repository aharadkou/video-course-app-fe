import { createReducer, on, Action } from '@ngrx/store';
import { inititalState, AuthenticationState } from '../states/authentication.state';
import { loginSuccess, loginFailure, logout } from '../actions/authentication.actions';

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
      errorMessage: error.error.message || 'Unknown error'
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
