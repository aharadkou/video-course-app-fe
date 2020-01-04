import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/states/app.state';
import { selectIsAuthenticated, selectUser } from 'src/app/store/selectors/authentication.selectors';
import { logout } from 'src/app/store/actions/authentication.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated = this.store.pipe(select(selectIsAuthenticated));

  user = this.store.pipe(select(selectUser));

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  logout() {
    this.store.dispatch(logout());
  }

}
