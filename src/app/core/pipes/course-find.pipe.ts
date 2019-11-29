import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../entities/course/course.model';
import { courses } from 'src/app/course-page/courses';

@Pipe({
  name: 'courseFind'
})
export class CourseFindPipe implements PipeTransform {

  transform(value: Course[], searchValue: string): Course[] {
    return courses.filter(course => course.title.toUpperCase().includes(searchValue.toUpperCase()));
  }

}
