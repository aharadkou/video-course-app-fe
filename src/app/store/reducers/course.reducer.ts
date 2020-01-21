import { createReducer, Action, on } from '@ngrx/store';
import { CourseState, initialState } from '../states/course.state';
import {
  find,
  loadNextPageSuccess,
  loadNextPageFailure,
  addFailure,
  reloadAllSuccess,
  reloadAllFailure,
  openDeleteModalFailure,
  deleteByIdFailure,
  getUpdatedFailure,
  getUpdatedSuccess,
  updateFailure,
  updateSuccess,
} from '../actions/course.actions';
import { courseAdapter } from '../adapters/course.adapter';

const courseReducer = createReducer(
  initialState,
  on(
    loadNextPageFailure,
    reloadAllFailure,
    addFailure,
    deleteByIdFailure,
    getUpdatedFailure,
    updateFailure,
    (state, { error }) => {
    return {
      ...state,
      errorMessage: error.error.message || 'Unknown error'
    };
  }),
  on(openDeleteModalFailure, (state, { errorMessage }) => {
    return {
      ...state,
      errorMessage
    };
  }),
  on(loadNextPageSuccess, (state, { pagination }) => {
    return {
      ...courseAdapter.addMany(pagination.courses, state),
      total: pagination.total,
      errorMessage: null
    };
  }),
  on(reloadAllSuccess, (state, { pagination }) => {
    return {
      ...courseAdapter.addAll(pagination.courses, state),
      total: pagination.total,
      errorMessage: null
    };
  }),
  on(find, (state, { filter }) => {
    return {
      ...courseAdapter.removeAll(state),
      filter
    };
  }),
  on(getUpdatedSuccess, (state, { updated }) => {
    return {
      ...state,
      updated,
      errorMessage: null
    };
  }),
  on(updateSuccess, state => {
    return {
      ...state,
      updated: null,
      errorMessage: null
    };
  })
);

export function reducer(state: CourseState, action: Action) {
  return courseReducer(state, action);
}
