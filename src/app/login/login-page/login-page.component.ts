import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  login(email: string, password: string) {
    this.userService.login(email, password).subscribe(
      {
        next: (_: any) => {
          this.router.navigate(['/']);
          console.log('Logged in succesfully');
        },
        error: (error: Error) => console.log(error)
      }
    );
  }
}
