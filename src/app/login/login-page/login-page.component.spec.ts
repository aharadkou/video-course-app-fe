import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/store/states/app.state';
import { Store } from '@ngrx/store';
import { login } from 'src/app/store/actions/authentication.actions';
import { ReactiveFormsModule } from '@angular/forms';
import { selectErrorMessage } from 'src/app/store/selectors/authentication.selectors';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let store: MockStore<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      providers: [provideMockStore()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    store.overrideSelector(selectErrorMessage, 'error');
    store.dispatch = jasmine.createSpy();
    fixture.detectChanges();
  });

  it('should dispatch login action after login button pressed ', () => {
    component.submitLogin();
    const loginForm = component.loginForm.value;
    expect(store.dispatch).toHaveBeenCalledWith(login({
      credentials: {
        email: loginForm.login,
        password: loginForm.password
      }
    }));
  });
});
