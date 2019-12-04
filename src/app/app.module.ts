import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CoursePageContainerComponent } from './course-page/course-page-container/course-page-container.component';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoursePageModule } from './course-page/course-page.module';
import { SharedModule } from './shared/shared.module';
import { CourseService } from './core/services/course.service';
import { InMemoryCourseService } from './core/services/in-memory-course.service';
import { UserService } from './core/services/user.service';
import { InMemoryUserService } from './core/services/in-memory-user.service';
import { LoginModule } from './login/login.module';
import { LoginPageComponent } from './login/login-page/login-page.component';
const routes: Routes = [
  {
    path: '',
    component : CoursePageContainerComponent
  },
  {
    path: 'login',
    component : LoginPageComponent
  }
];


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    CoursePageModule,
    SharedModule,
    LoginModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide: CourseService, useClass: InMemoryCourseService},
    {provide: UserService, useClass: InMemoryUserService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}
