import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { IconsModule } from 'src/app/icons/icons.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AppState } from 'src/app/store/states/app.state';
import { Store, MemoizedSelector } from '@ngrx/store';
import { selectIsAuthenticated, selectUser } from 'src/app/store/selectors/authentication.selectors';
import { UserCredentials } from 'src/app/core/entities/user/user-credentials';
import { By } from '@angular/platform-browser';
import { logout } from 'src/app/store/actions/authentication.actions';

describe('HeaderComponent', () => {
  const expectedEmail = 'expected';
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store: MockStore<AppState>;
  let mockIsAuthenticatedSelector: MemoizedSelector<AppState, boolean>;
  let mockUserSelector: MemoizedSelector<AppState, UserCredentials>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [IconsModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    TestBed.get(Router).navigate = jasmine.createSpy();
    store = TestBed.get(Store);
    store.dispatch = jasmine.createSpy();
    mockIsAuthenticatedSelector = store.overrideSelector(selectIsAuthenticated, true);
    mockUserSelector = store.overrideSelector(selectUser, { email: expectedEmail });
    fixture.detectChanges();
  });

  it('should display logged user email', () => {
    const userInfoEl = fixture.debugElement.query(By.css('a')).nativeElement;
    expect(userInfoEl.textContent).toBe(expectedEmail);
  });

  describe('logout', () => {
    it('should dispatch logout action', () => {
      const logoutButtonEl = fixture.debugElement.query(By.css('.logout-button'));
      logoutButtonEl.triggerEventHandler('click', null);
      expect(store.dispatch).toHaveBeenCalledWith(logout());
    });
  });

});
