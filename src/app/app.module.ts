import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoursePageModule } from './course-page/course-page.module';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPlayCircle as farPlayCircle, faClock as farClock, faCalendarAlt as farCalendarAlt, IconDefinition} from '@fortawesome/free-regular-svg-icons';
import { faUser as fasUser, faSignOutAlt as fasSignOutAlt, faPlus as fasPlus, 
  faPen as fasPen, faTrash as fasTrash, faSearch as fasSearch} from '@fortawesome/free-solid-svg-icons';
import { CoursePageContainerComponent } from './course-page/course-page-container/course-page-container.component';


const routes : Routes = [
  {
    path: '',
    component : CoursePageContainerComponent
  }
];

const icons : IconDefinition[] = [
  farPlayCircle, fasUser, fasSignOutAlt, fasPlus, 
  fasPen, fasTrash, fasSearch, farClock, farCalendarAlt
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CoreModule, CoursePageModule, FontAwesomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(...icons);
  }
}
