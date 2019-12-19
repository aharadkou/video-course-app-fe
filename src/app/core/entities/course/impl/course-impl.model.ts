import { Course } from '../course.model';
import { User } from '../../user/user.model';

export class CourseImpl implements Course {

    id: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
    topRated: boolean;
    authors: User[];

    constructor(
        id: number,
        title: string,
        creationDate: Date,
        duration: number,
        description: string,
        topRated: boolean,
        authors?: User[]
    ) {
        this.id = id;
        this.title = title;
        this.creationDate = creationDate;
        this.duration = duration;
        this.description = description;
        this.topRated = topRated;
        this.authors = authors || [];
    }

}
