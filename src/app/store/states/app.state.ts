import { AuthenticationState } from './authentication.state';
import { CourseState } from './course.state';
import * as fromRouter from '@ngrx/router-store';
import { AuthorState } from './author.state';

export interface AppState {
  authenticationState: AuthenticationState;
  courseState: CourseState;
  authorState: AuthorState;
  routerState: fromRouter.RouterReducerState<any>;
}
