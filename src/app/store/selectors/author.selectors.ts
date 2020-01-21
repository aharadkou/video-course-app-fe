import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '../states/app.state';

import { AuthorState } from '../states/author.state';
import { authorAdapter } from '../adapters/author.adapter';
import { Author } from 'src/app/core/entities/course/author.model';

export const selectAuthor = createFeatureSelector<AppState, AuthorState>('authorState');

const {
  selectAll
} = authorAdapter.getSelectors();

export const selectFiltered = createSelector(
  selectAuthor,
  selectAll
);

export const selectFirstFiltered = createSelector(
  selectFiltered,
  (authors: Author[]) => authors[0]
);

export const selectError = createSelector(
  selectAuthor,
  (state: AuthorState) => state.errorMessage
);
