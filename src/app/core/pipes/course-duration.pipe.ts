import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseDuration'
})
export class CourseDurationPipe implements PipeTransform {

  private getTimePart(time: number, title: string): string {
    return time ? time + title : '';
  }

  transform(value: number): string {
    const minutesInHour = 60;
    const hours = Math.floor(value / minutesInHour);
    const minutes = Math.floor(value % minutesInHour);
    return this.getTimePart(hours, 'h ') + this.getTimePart(minutes, 'min');
  }

}
