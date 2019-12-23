import { Course } from './course.model';

export interface CoursePagination {
    courses: Course[];
    total: number;
}
