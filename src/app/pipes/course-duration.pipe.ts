import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseDuration'
})
export class CourseDurationPipe implements PipeTransform {

  transform(duration: number): string {
    const minutesInHour: number = 60;
    let hoursNumber = Math.floor(duration / minutesInHour);
    return (hoursNumber ? hoursNumber + 'h ': ' ') + (duration % minutesInHour) + ' min';
  }

}
