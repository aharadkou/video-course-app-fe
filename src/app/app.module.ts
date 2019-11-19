import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoursePageModule } from './course-page/course-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, CoreModule, CoursePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
