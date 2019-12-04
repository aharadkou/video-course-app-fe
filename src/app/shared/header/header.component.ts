import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  isAuthenticated(): Observable<boolean> {
    return this.userService.isAuthenticated();
  }

  login() {

  }

  logout(): Observable<boolean> {
    return this.userService.logout();
  }

}
