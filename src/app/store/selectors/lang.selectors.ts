import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '../states/app.state';

import { LangState } from '../states/lang.state';

export const selectLang = createFeatureSelector<AppState, LangState>('langState');

export const selectCurrentLang = createSelector(
  selectLang,
  (state: LangState) => state.currentLang
);
