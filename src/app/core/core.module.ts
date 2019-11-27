import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageTitleDirective } from './directives/page-title/page-title.directive';
import { CourseDurationPipe } from './pipes/course-duration.pipe';



@NgModule({
  declarations: [PageTitleDirective, CourseDurationPipe],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [PageTitleDirective, CourseDurationPipe]
})
export class CoreModule { }
