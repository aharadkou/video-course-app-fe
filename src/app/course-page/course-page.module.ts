import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolSectionComponent } from './tool-section/tool-section.component';
import { CourseListComponent } from './course-list/course-list.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';



@NgModule({
  declarations: [ToolSectionComponent, CourseListComponent, BreadcrumbsComponent],
  imports: [
    CommonModule
  ],
  exports: [ToolSectionComponent, CourseListComponent, BreadcrumbsComponent],
})
export class CoursePageModule { }
