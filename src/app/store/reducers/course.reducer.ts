import { createReducer, Action, on } from '@ngrx/store';
import { CourseState, initialState } from '../states/course.state';
import { loadPagedSuccess, loadMore, find, update, deleteByIdComplete } from '../actions/course.actions';
import { COURSE_PER_PAGE, COURSE_LOAD_FROM } from 'src/app/core/constants/constants';
import { courseAdapter } from '../adapters/course.adapter';

const courseReducer = createReducer(
  initialState,
  on(loadPagedSuccess, (state, { pagination }) => {
    return {
      ...courseAdapter.addMany(pagination.courses, state),
      loadCount: COURSE_PER_PAGE,
      total: pagination.total
    };
  }),
  on(loadMore, state => {
    return {
      ...state,
      loadFrom: state.loadFrom + COURSE_PER_PAGE
    };
  }),
  on(find, (state, { filter }) => {
    return {
      ...courseAdapter.removeAll(state),
      filter,
      loadFrom: COURSE_LOAD_FROM
    };
  }),
  on(update, state => {
    return {
      ...courseAdapter.removeAll(state),
      loadFrom: COURSE_LOAD_FROM,
      loadCount: state.ids.length
    };
  }),
  on(deleteByIdComplete, state => {
    return {
      ...courseAdapter.removeAll(state),
      loadFrom: COURSE_LOAD_FROM,
      loadCount: state.ids.length
    };
  })
);

export function reducer(state: CourseState, action: Action) {
  return courseReducer(state, action);
}
