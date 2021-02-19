import { Pipe, PipeTransform } from '@angular/core';
import { MINUTES_IN_HOUR } from '../constants/constants';

@Pipe({
  name: 'courseDuration'
})
export class CourseDurationPipe implements PipeTransform {

  private getTimePart(time: number, title: string): string {
    return time ? time + title : '';
  }

  transform(value: number, hoursAbbrev: string, minutesAbbrev: string): string {
    if (value < 0) {
      return;
    }
    const hours = Math.floor(value / MINUTES_IN_HOUR);
    const minutes = Math.floor(value % MINUTES_IN_HOUR);
    return this.getTimePart(hours, `${hoursAbbrev} `) + this.getTimePart(minutes, `${minutesAbbrev}`);
  }

}
