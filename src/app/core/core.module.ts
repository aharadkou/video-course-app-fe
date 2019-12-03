import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleDirective } from './directives/page-title/page-title.directive';
import { CourseDurationPipe } from './pipes/course-duration.pipe';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [PageTitleDirective, CourseDurationPipe],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [PageTitleDirective, CourseDurationPipe]
})
export class CoreModule { }
