import { User } from '../user/user.model';

export interface Course {
    id: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
    topRated: boolean;
    authors: number[];
}
