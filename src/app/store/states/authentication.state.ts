import { UserCredentials } from 'src/app/core/entities/user/user-credentials';

export const inititalState: AuthenticationState = {
  token: null,
  user: null,
  errorMessage: null
};

export interface AuthenticationState {
  token: string;
  user: UserCredentials;
  errorMessage: string;
}
