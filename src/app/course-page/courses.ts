import { Course } from '../entities/course/course.model';
import { CourseImpl } from '../entities/course/impl/course-impl.model';

export const courses : Course[] = [
    new CourseImpl(1, "Course 1", new Date(), 55, "Some description") ,
    new CourseImpl(2, "Course 2", new Date(), 75, "Some description"),    
    new CourseImpl(3, "Course 3", new Date(), 135, "Some description"),  
]