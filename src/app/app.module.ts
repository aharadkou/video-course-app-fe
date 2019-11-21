import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoursePageModule } from './course-page/course-page.module';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPlayCircle as farPlayCircle} from '@fortawesome/free-regular-svg-icons';
import { faUser as fasUser, faSignOutAlt as fasSignOutAlt, faPlus as fasPlus, 
  faPen as fasPen, faTrash as fasTrash, faSearch as fasSearch} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CoreModule, CoursePageModule, FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(farPlayCircle, fasUser, fasSignOutAlt, fasPlus, fasPen, fasTrash, fasSearch);
  }
}
