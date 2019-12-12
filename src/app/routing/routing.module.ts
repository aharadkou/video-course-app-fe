import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursePageContainerComponent } from '../course-page/course-page-container/course-page-container.component';
import { LoginPageComponent } from '../login/login-page/login-page.component';
import { CourseFormComponent } from '../course-form-page/course-form/course-form.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { AuthenticationGuard } from '../guards/authentication.guard';


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
        component: CourseFormComponent
      },
      {
        path: ':courseId',
        component: CourseFormComponent
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
