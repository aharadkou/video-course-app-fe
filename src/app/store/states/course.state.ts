import { Course } from 'src/app/core/entities/course/course.model';
import { EntityState } from '@ngrx/entity';
import { courseAdapter } from '../adapters/course.adapter';

export const initialState: CourseState = {
  ...courseAdapter.getInitialState(),
  filter: '',
  total: 0,
  errorMessage: null,
  updated: null
};

export interface CourseState extends EntityState<Course> {
  filter: string;
  total: number;
  errorMessage: string;
  updated: Course;
}
