import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoursePageModule } from './course-page/course-page.module';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { CourseFormPageModule } from './course-form-page/course-form-page.module';
import { RoutingModule } from './routing/routing.module';
import { AuthenticationInterceptor } from './core/http-interceptors/authentication-interceptor';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    CoreModule,
    CoursePageModule,
    CourseFormPageModule,
    SharedModule,
    LoginModule,
    RoutingModule,
    HttpClientModule
  ],
  bootstrap: [ AppComponent ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    }
  ]
})
export class AppModule {
  constructor() { }
}
