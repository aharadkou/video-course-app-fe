import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  login(email: string, password: string) {
    this.userService.login(email, password);
    console.log('Logged in succesfully');
  }
}
