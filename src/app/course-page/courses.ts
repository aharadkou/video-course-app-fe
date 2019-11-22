import { Course } from '../entities/course/course.model';
import { CourseImpl } from '../entities/course/impl/course-impl.model';

let mockDescription : string = "Learn about where you can find course descriptions, what information they include, how they work," + 
"and details about various components of a course description." + "Learn about where you can find course descriptions, what information they include, how they work," + 
"and details about various components of a course description.";
export const courses : Course[] = [
    new CourseImpl(1, "Course 1", new Date(), 55, mockDescription) ,
    new CourseImpl(2, "Course 2", new Date(), 75, mockDescription),    
    new CourseImpl(3, "Course 3", new Date(), 135, mockDescription),  
]