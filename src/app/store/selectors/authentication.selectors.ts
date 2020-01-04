import { AppState } from '../states/app.state';
import { createSelector } from '@ngrx/store';
import { AuthenticationState } from '../states/authentication.state';
import { UserCredentials } from 'src/app/core/entities/user/user-credentials';

const selectAuthentication = (state: AppState) => state.authenticationState;

export const selectErrorMessage = createSelector(
  selectAuthentication,
  (state: AuthenticationState) => state.errorMessage
);

export const selectUser = createSelector(
  selectAuthentication,
  (state: AuthenticationState) => state.user
);

export const selectIsAuthenticated = createSelector(
  selectUser,
  (credentials: UserCredentials) => !!credentials
);

export const selectToken = createSelector(
  selectAuthentication,
  (state: AuthenticationState) => {
    return state.token;
  }
);
