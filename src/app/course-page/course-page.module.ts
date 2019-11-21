import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseControlsComponent } from './course-controls/course-controls.component';



@NgModule({
  declarations: [CourseControlsComponent, CourseListComponent],
  imports: [
    CommonModule
  ],
  exports: [CourseControlsComponent, CourseListComponent],
})
export class CoursePageModule { }
