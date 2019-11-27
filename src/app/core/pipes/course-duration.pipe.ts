import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseDuration'
})
export class CourseDurationPipe implements PipeTransform {

  transform(value: number): string {
    const minutesInHour = 60;
    const hoursNumber = Math.floor(value / minutesInHour);
    return (hoursNumber ? hoursNumber + 'h ' : '') + (value % minutesInHour) + ' min';
  }

}
