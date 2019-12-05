import { NgModule } from '@angular/core';


import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faPlayCircle as farPlayCircle,
  faClock as farClock,
  faCalendarAlt as farCalendarAlt,
  IconDefinition
} from '@fortawesome/free-regular-svg-icons';
import {
  faUser as fasUser,
  faSignOutAlt as fasSignOutAlt,
  faPlus as fasPlus,
  faPen as fasPen,
  faTrash as fasTrash,
  faSearch as fasSearch,
  faStar as fasStar
} from '@fortawesome/free-solid-svg-icons';


const icons: IconDefinition[] = [
  farPlayCircle,
  fasUser,
  fasSignOutAlt,
  fasPlus,
  fasPen,
  fasTrash,
  fasSearch,
  farClock,
  farCalendarAlt,
  fasStar
];


@NgModule({
  declarations: [],
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class IconsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(...icons);
  }
 }
