import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/states/app.state';
import { selectErrorMessage } from 'src/app/store/selectors/authentication.selectors';
import { login } from 'src/app/store/actions/authentication.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) { }

  loginForm: FormGroup;
  errorMessage = this.store.pipe(select(selectErrorMessage));

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: [''],
      password: ['']
    });
  }

  get login() {
    return this.loginForm.get('login');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submitLogin() {
    const formValue = this.loginForm.value;
    this.store.dispatch(login({
      credentials: {
        email: formValue.login,
        password: formValue.password
      }
    }));
  }
}
