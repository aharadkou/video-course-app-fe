import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../entities/course/course.model';

@Pipe({
  name: 'coursesOrderBy'
})
export class CoursesOrderByPipe implements PipeTransform {

  transform(value: Course[], ...args: any[]): Course[] {
    value.sort((c1, c2) => c1.creationDate.getTime() - c2.creationDate.getTime());
    return value;
  }

}
