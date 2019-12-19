import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursePageContainerComponent } from '../course-page/course-page-container/course-page-container.component';
import { LoginPageComponent } from '../login/login-page/login-page.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { AuthenticationGuard } from '../core/guards/authentication.guard';
import { CourseEditPageComponent } from '../course-form-page/course-edit-page/course-edit-page.component';
import { CourseAddPageComponent } from '../course-form-page/course-add-page/course-add-page.component';


const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    canActivateChild: [ AuthenticationGuard ],
    children: [
      {
        path: '',
        component: CoursePageContainerComponent,
      },
      {
        path: 'new',
        component: CourseAddPageComponent
      },
      {
        path: ':courseId',
        component: CourseEditPageComponent
      },
    ]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
