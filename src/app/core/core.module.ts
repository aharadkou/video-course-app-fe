import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleDirective } from './directives/page-title.directive';
import { CourseDurationPipe } from './pipes/course-duration.pipe';
import { IconsModule } from '../icons/icons.module';
import { CourseFreshnessDirective } from './directives/course-freshness.directive';
import { CoursesOrderByPipe } from './pipes/courses-order-by.pipe';



@NgModule({
  declarations: [
    PageTitleDirective,
    CourseDurationPipe,
    CourseFreshnessDirective,
    CoursesOrderByPipe
  ],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    PageTitleDirective,
    CourseDurationPipe,
    CourseFreshnessDirective,
    CoursesOrderByPipe,
    CourseFreshnessDirective
  ]
})
export class CoreModule { }
