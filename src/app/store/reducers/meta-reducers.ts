import { MetaReducer } from '@ngrx/store';
import { localStorageSyncReducer } from './local-storage-sync.reducer';

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
