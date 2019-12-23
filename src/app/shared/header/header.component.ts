import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  isAuthenticated(): boolean {
    return this.userService.isAuthenticated();
  }

  getUserInfo(): string {
    return this.userService.getUserInfo();
  }

  logout() {
    this.router.navigate(['/login']);
    this.userService.logout();
  }

}
