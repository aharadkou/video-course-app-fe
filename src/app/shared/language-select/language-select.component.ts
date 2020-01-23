import { Component, OnInit } from '@angular/core';
import { SUPPORTED_LANGS, TAKE_FIRST } from 'src/app/core/constants/constants';
import { AppState } from 'src/app/store/states/app.state';
import { Store, select } from '@ngrx/store';
import { selectCurrentLang } from 'src/app/store/selectors/lang.selectors';
import { changeLang } from 'src/app/store/actions/lang.actions';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.css']
})
export class LanguageSelectComponent implements OnInit {

  readonly supportedLangs = SUPPORTED_LANGS;
  currentLang = this.store.pipe(select(selectCurrentLang));

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.currentLang.pipe(take(TAKE_FIRST)).subscribe(
      lang => this.changeLang(lang)
    );
  }

  changeLang(lang: string) {
    this.store.dispatch(changeLang({ lang }));
  }
}
