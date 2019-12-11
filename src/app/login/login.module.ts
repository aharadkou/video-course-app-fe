import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ]
})
export class LoginModule { }
