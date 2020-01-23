import { createReducer, on, Action } from '@ngrx/store';
import { initialState, AuthorState } from '../states/author.state';
import { authorAdapter } from '../adapters/author.adapter';
import { loadFilteredSuccess, loadFilteredFailure, clearFiltered } from '../actions/author.actions';
import { UNKNOWN_ERROR } from 'src/app/core/constants/constants';

const authorReducer = createReducer(
  initialState,
  on(loadFilteredSuccess, (state, { authors }) => {
    return {
      ...authorAdapter.addAll(authors, state),
      errorMessage: null
    };
  }),
  on(loadFilteredFailure, (state, { error }) => {
    return {
      ...authorAdapter.removeAll(state),
      errorMessage: error.error.message || UNKNOWN_ERROR
    };
  }),
  on(clearFiltered, state => {
    return {
      ...authorAdapter.removeAll(state)
    };
  }),
);

export function reducer(state: AuthorState, action: Action) {
  return authorReducer(state, action);
}
