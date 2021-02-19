import { createReducer, on, Action } from '@ngrx/store';
import { initialState, LangState } from '../states/lang.state';
import { changeLangSuccess, changeLangFailure } from '../actions/lang.actions';

const langReducer = createReducer(
  initialState,
  on(changeLangSuccess, (state, { lang }) => {
    return {
      ...state,
      currentLang: lang
    };
  }),
  on(changeLangFailure, state => {
    return {
      ...state,
      currentLang: 'en'
    };
  }),
);

export function reducer(state: LangState, action: Action) {
  return langReducer(state, action);
}
