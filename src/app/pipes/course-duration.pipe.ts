import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseDuration'
})
export class CourseDurationPipe implements PipeTransform {

  transform(value: number): string {
    const minutesInHour: number = 60;
    let hoursNumber = Math.floor(value / minutesInHour);
    return (hoursNumber ? hoursNumber + 'h ': ' ') + (value % minutesInHour) + ' min';
  }

}
