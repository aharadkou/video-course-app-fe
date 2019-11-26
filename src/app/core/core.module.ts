import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageTitleDirective } from './directives/page-title/page-title.directive';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, LogoComponent, BreadcrumbsComponent, PageTitleDirective],
  imports: [
    CommonModule, FontAwesomeModule
  ],
  exports: [FooterComponent, HeaderComponent, LogoComponent, BreadcrumbsComponent, PageTitleDirective]
})
export class CoreModule { }
