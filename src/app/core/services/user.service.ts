import { Observable } from 'rxjs';

export abstract class UserService {
    abstract login(login: string, password: string): Observable<any>;
    abstract logout(): Observable<any>;
    abstract isAuthenticated(): Observable<boolean>;
    abstract getUserInfo(): Observable<string>;
}