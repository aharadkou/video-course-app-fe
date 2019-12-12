import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseControlsComponent } from './course-controls/course-controls.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { FormsModule } from '@angular/forms';
import { CoursePageContainerComponent } from './course-page-container/course-page-container.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { IconsModule } from '../icons/icons.module';
import { CourseDeleteModalComponent } from './course-delete-modal/course-delete-modal.component';


@NgModule({
  declarations: [
    CourseControlsComponent,
    CourseListComponent,
    CourseItemComponent,
    CoursePageContainerComponent,
    CourseDeleteModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    SharedModule,
    IconsModule
  ],
  exports: [CoursePageContainerComponent],
})
export class CoursePageModule { }
