import { AuthenticationState } from './authentication.state';
import { CourseState } from './course.state';
import * as fromRouter from '@ngrx/router-store';

export interface AppState {
  authenticationState: AuthenticationState;
  courseState: CourseState;
  routerState: fromRouter.RouterReducerState<any>;
}
