import { DATE_SEPARATOR, PATTERN_DATE } from '../constants/constants';
import { Course } from '../entities/course/course.model';

export function dateToString(value: Date): string {
  return addLeadingZero(value.getDate()) + DATE_SEPARATOR +
        addLeadingZero(value.getMonth() + 1) + DATE_SEPARATOR + value.getFullYear();
}

function addLeadingZero(value: number) {
  return value > 9 ? value : `0${value}`;
}

export function stringToDate(value: string) {
  const [, day, month, year] = value.match(PATTERN_DATE);
  return new Date(+year, +month - 1, +day);
}

export function restoreCourseDate(course: Course) {
  course.creationDate = new Date(course.creationDate);
}
