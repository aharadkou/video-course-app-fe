import { TestBed, async } from '@angular/core/testing';

import { AuthenticationGuard } from './authentication.guard';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../services/user.service';

const userServiceSpy = jasmine.createSpyObj({
  isAuthenticated: false
});

describe('AuthenticationGuard', () => {
  let router: Router;
  let guard: AuthenticationGuard;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthenticationGuard,
        { provide: UserService, useValue: userServiceSpy }
      ],
      imports: [RouterTestingModule],
    });
    router = TestBed.get(Router);
    router.navigateByUrl = jasmine.createSpy();
    guard = TestBed.get(AuthenticationGuard);
  });

  it('should return false if user is not authenticated', async(() => {
    TestBed.get(AuthenticationGuard)
      .canActivateChild(undefined, undefined).subscribe(
        (isAuthenticated: boolean) => expect(isAuthenticated).not.toBeTruthy()
    );
  }));

  it('should redirect to /login if user is not authenticated', async(() => {
    TestBed.get(AuthenticationGuard)
      .canActivateChild(undefined, undefined).subscribe(
        () => expect(router.navigateByUrl).toHaveBeenCalledWith('/login')
    );
  }));

});
