import { Course } from 'src/app/core/entities/course/course.model';
import { EntityState } from '@ngrx/entity';
import { COURSE_LOAD_FROM, COURSE_PER_PAGE } from 'src/app/core/constants/constants';
import { courseAdapter } from '../adapters/course.adapter';

export const initialState: CourseState = {
  ...courseAdapter.getInitialState(),
  loadFrom: COURSE_LOAD_FROM,
  loadCount: COURSE_PER_PAGE,
  filter: '',
  total: 0
};

export interface CourseState extends EntityState<Course> {
  loadFrom: number;
  loadCount: number;
  filter: string;
  total: number;
}
