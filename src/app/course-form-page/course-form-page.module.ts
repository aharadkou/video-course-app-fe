import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseDateInputComponent } from './course-date-input/course-date-input.component';
import { CourseDurationInputComponent } from './course-duration-input/course-duration-input.component';
import { CourseAuthorsInputComponent } from './course-authors-input/course-authors-input.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from '../routing/routing.module';



@NgModule({
  declarations: [
    CourseFormComponent,
    CourseDateInputComponent,
    CourseDurationInputComponent,
    CourseAuthorsInputComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    FormsModule,
    RoutingModule
  ],
  exports: [
    CourseFormComponent
  ]
})
export class CourseFormPageModule { }
