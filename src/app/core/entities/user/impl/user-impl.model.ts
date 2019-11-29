import { User } from '../user.model';

export class UserImpl implements User {
    id: number;
    firstName: string;
    lastName: string;
}
