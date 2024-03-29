import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { IconsModule } from '../icons/icons.module';
import { ModalComponent } from './modal/modal.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { RoutingModule } from '../routing/routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingBlockComponent } from './loading-block/loading-block.component';
import {TranslateModule} from '@ngx-translate/core';
import { LanguageSelectComponent } from './language-select/language-select.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    BreadcrumbsComponent,
    ModalComponent,
    AlertModalComponent,
    PageNotFoundComponent,
    LoadingBlockComponent,
    LanguageSelectComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    RoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    BreadcrumbsComponent,
    ModalComponent,
    AlertModalComponent,
    ReactiveFormsModule,
    LoadingBlockComponent,
    IconsModule,
    TranslateModule
  ]
})
export class SharedModule { }
