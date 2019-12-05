import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../entities/course/course.model';

@Pipe({
  name: 'courseFind'
})
export class CourseFindPipe implements PipeTransform {

  transform(value: Course[], searchValue: string): Course[] {
    return value.filter(course => course.title.toUpperCase().includes(searchValue.toUpperCase()));
  }

}
