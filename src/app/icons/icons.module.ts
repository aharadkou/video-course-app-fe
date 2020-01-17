import { NgModule } from '@angular/core';


import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faPlayCircle as farPlayCircle,
  faClock as farClock,
  faCalendarAlt as farCalendarAlt,
  faMinusSquare as farMinusSquare,
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
  fasStar,
  farMinusSquare
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
