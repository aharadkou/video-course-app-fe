import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

const CHANNELS = {
    courseDelete: new Subject<number>(),
    courseFind: new Subject<string>()
};

@Injectable({
    providedIn: 'root'
})
export class CommunicatorService {

    getData(channelName: string): Observable<any> {
        return CHANNELS[channelName].asObservable();
    }

    publishData(channelName: string, data: any) {
        CHANNELS[channelName].next(data);
    }

}
