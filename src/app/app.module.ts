import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoursePageModule } from './course-page/course-page.module';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { CourseFormPageModule } from './course-form-page/course-form-page.module';
import { RoutingModule } from './routing/routing.module';
import { AuthenticationInterceptor } from './core/http-interceptors/authentication-interceptor';
import { LoadingBlockInterceptor } from './core/http-interceptors/loading-block-interceptor';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { metaReducers } from './store/reducers/meta-reducers';
import { reducers } from './store/reducers/reducers';
import { environment } from 'src/environments/environment';
import { effects } from './store/effects/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    CoursePageModule,
    CourseFormPageModule,
    SharedModule,
    LoginModule,
    RoutingModule,
    HttpClientModule,
    EffectsModule.forRoot(effects),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingBlockInterceptor,
      multi: true
    }
  ]
})
export class AppModule {
  constructor() { }
}
