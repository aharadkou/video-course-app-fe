import * as authentication from '../../store/reducers/authentication.reducer';
import * as course from '../../store/reducers/course.reducer';
import { routerReducer } from '@ngrx/router-store';

export const reducers = {
  authenticationState:  authentication.reducer,
  courseState: course.reducer,
  routerState: routerReducer
};
