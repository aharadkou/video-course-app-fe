import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CommunicatorService {

    private channel = new Subject<number>();

    channel$ = this.channel.asObservable();

    publishData(data: number) {
        this.channel.next(data);
    }
}
