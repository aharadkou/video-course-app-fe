import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Course } from 'src/app/core/entities/course/course.model';

export const courseAdapter: EntityAdapter<Course> = createEntityAdapter<Course>();
