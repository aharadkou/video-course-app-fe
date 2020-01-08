import { createFeatureSelector } from '@ngrx/store';
import { AppState } from '../states/app.state';
import * as fromRouter from '@ngrx/router-store';

export const selectRouter = createFeatureSelector<
  AppState,
  fromRouter.RouterReducerState<any>
>('routerState');

export const {
  selectRouteParam
} = fromRouter.getSelectors(selectRouter);
