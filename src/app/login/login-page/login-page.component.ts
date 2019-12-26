import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/core/services/modal.service';
import { UserCredentials } from 'src/app/core/entities/user/user-credentials';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router,
              private modalService: ModalService
  ) { }

  ngOnInit() {
  }

  login(email: string, password: string) {
    this.userService.login(email, password).subscribe(
      {
        next: () => {
          this.router.navigate(['/']);
        },
        error: error => {
          console.log(error);
          this.modalService.open('login-failed-modal');
        }
      }
    );
  }
}
