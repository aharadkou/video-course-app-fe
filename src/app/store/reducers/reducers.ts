import * as authentication from '../../store/reducers/authentication.reducer';
import * as course from '../../store/reducers/course.reducer';
import * as author from '../../store/reducers/author.reducer';
import * as lang from '../../store/reducers/lang.reducer';
import { routerReducer } from '@ngrx/router-store';

export const reducers = {
  authenticationState:  authentication.reducer,
  courseState: course.reducer,
  routerState: routerReducer,
  authorState: author.reducer,
  langState: lang.reducer
};
