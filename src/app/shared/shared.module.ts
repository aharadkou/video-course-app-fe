import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsModule } from '../icons/icons.module';
import { ModalComponent } from './modal/modal.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { RoutingModule } from '../routing/routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    BreadcrumbsComponent,
    ModalComponent,
    AlertModalComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    RoutingModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    BreadcrumbsComponent,
    ModalComponent,
    AlertModalComponent
  ]
})
export class SharedModule { }
