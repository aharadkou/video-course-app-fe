import { Course } from '../course.model';

export class CourseImpl implements Course {

    id: number; 
    creationDate: Date;
    duration: number;
    description: string;

}