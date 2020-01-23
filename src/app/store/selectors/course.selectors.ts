import { AppState } from '../states/app.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CourseState } from '../states/course.state';
import { courseAdapter } from '../adapters/course.adapter';
import { selectRouteParam } from './router.selectors';

export const selectCourse = createFeatureSelector<AppState, CourseState>('courseState');

const {
  selectTotal,
  selectAll
} = courseAdapter.getSelectors();

export const selectTotalLoaded = createSelector(
  selectCourse,
  selectTotal
);

export const selectLoaded = createSelector(
  selectCourse,
  selectAll
);

export const selectCanLoadMore = createSelector(
  selectCourse,
  selectTotalLoaded,
  (state: CourseState, total: number) => state.total !== total
);

export const selectIsEmpty = createSelector(
  selectTotalLoaded,
  (totalLoaded: number) => totalLoaded === 0
);

export const selectUpdatedId = selectRouteParam('courseId');

export const selectUpdated = createSelector(
  selectCourse,
  (state: CourseState) => state.updated
);

export const selectErrorMessage = createSelector(
  selectCourse,
  (state: CourseState) => state.errorMessage
);
