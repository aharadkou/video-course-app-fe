import { localStorageSync } from 'ngrx-store-localstorage';
import { ActionReducer } from '@ngrx/store';

const options = {
  keys: [
    { authenticationState: ['user', 'token'] }
  ],
  rehydrate: true
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync(options)(reducer);
}
