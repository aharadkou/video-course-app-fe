import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CoursePageContainerComponent } from './course-page/course-page-container/course-page-container.component';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoursePageModule } from './course-page/course-page.module';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { CourseFormPageModule } from './course-form-page/course-form-page.module';
import { CourseFormComponent } from './course-form-page/course-form/course-form.component';
const routes: Routes = [
  {
    path: '',
    component : CoursePageContainerComponent
  },
  {
    path: 'login',
    component : LoginPageComponent
  },
  {
    path: 'new',
    component: CourseFormComponent
  },
  {
    path: 'courses/:courseId',
    component: CourseFormComponent
  }
];


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    CoursePageModule,
    CourseFormPageModule,
    SharedModule,
    LoginModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}
