import { User } from '../user.model';

export class Author implements User {

    constructor(public id: number, public firstName: string, public lastName: string) { }

}
