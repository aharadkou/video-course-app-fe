import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseControlsComponent } from './course-controls/course-controls.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { FormsModule } from "@angular/forms";
import { CourseDurationPipe } from '../pipes/course-duration.pipe';
import { CoursePageContainerComponent } from './course-page-container/course-page-container.component';
import { CoreModule } from '../core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [CourseControlsComponent, CourseListComponent, 
    CourseItemComponent, CourseDurationPipe, CoursePageContainerComponent],
  imports: [
    CommonModule, FormsModule, CoreModule, FontAwesomeModule
  ],
  exports: [CourseControlsComponent, CourseListComponent, CoursePageContainerComponent],
})
export class CoursePageModule { }
