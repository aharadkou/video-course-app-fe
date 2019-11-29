import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseControlsComponent } from './course-controls/course-controls.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { FormsModule } from '@angular/forms';
import { CoursePageContainerComponent } from './course-page-container/course-page-container.component';
import { CoreModule } from '../core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CourseControlsComponent,
    CourseListComponent,
    CourseItemComponent,
    CoursePageContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    SharedModule,
    FontAwesomeModule
  ],
  exports: [CourseControlsComponent, CourseListComponent, CoursePageContainerComponent],
})
export class CoursePageModule { }
