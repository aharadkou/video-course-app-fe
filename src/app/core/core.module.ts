import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleDirective } from './directives/page-title.directive';
import { CourseDurationPipe } from './pipes/course-duration.pipe';
import { IconsModule } from '../icons/icons.module';
import { CourseFreshnessDirective } from './directives/course-freshness.directive';
import { LocalizedDatePipe } from './pipes/localized-date.pipe';



@NgModule({
  declarations: [
    PageTitleDirective,
    CourseDurationPipe,
    CourseFreshnessDirective,
    LocalizedDatePipe
  ],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    PageTitleDirective,
    CourseDurationPipe,
    CourseFreshnessDirective,
    CourseFreshnessDirective,
    LocalizedDatePipe
  ]
})
export class CoreModule { }
