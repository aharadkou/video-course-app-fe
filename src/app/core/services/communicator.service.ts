import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CommunicatorService {

    private channel = new Subject<string>();

    channel$ = this.channel.asObservable();

    publishData(data: string) {
        this.channel.next(data);
    }
}
