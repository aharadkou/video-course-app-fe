import { createReducer, on, Action, State } from '@ngrx/store';
import { inititalState, AuthenticationState } from '../states/authentication.state';
import { loginSuccess, loginFailure, logout, loginComplete } from '../actions/authentication.actions';

const authenticationReducer = createReducer(
  inititalState,
  on(loginSuccess, (state, { token }) => {
    return {
      ...state,
      token,
    };
  }),
  on(loginFailure, (state, { error }) => {
    return {
      ...state,
      errorMessage: error.error.message || 'Unknown error'
    };
  }),
  on(loginComplete, (state, { credentials }) => {
    return {
      ...state,
      user: credentials
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
