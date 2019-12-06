import { Observable } from 'rxjs';

export function createObservable(value: any): Observable<any> {
    return new Observable(observer => observer.next(value));
}
