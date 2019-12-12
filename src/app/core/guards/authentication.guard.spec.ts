import { TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';

import { AuthenticationGuard } from './authentication.guard';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { createObservable } from '../utils/observable-utils';
import { UserService } from '../services/user.service';

let userServiceSpy = jasmine.createSpyObj({
  isAuthenticated: createObservable(false)
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
      imports: [ RouterTestingModule ],
    });
    router = TestBed.get(Router);
    router.navigateByUrl = jasmine.createSpy();
    guard = TestBed.get(AuthenticationGuard);
    userServiceSpy = jasmine.createSpyObj({
      isAuthenticated: createObservable(false)
    });
  });

  it('should return false if user is not authenticated', async(() => {
    TestBed.get(AuthenticationGuard)
      .canActivateChild(undefined, undefined).subscribe(
        (isAuthenticated: boolean) => expect(isAuthenticated).not.toBeTruthy()
    );
  }));

  it('should redirect to /login is not authenticated', async(() => {
    TestBed.get(AuthenticationGuard)
      .canActivateChild(undefined, undefined).subscribe(
        () => expect(router.navigateByUrl).toHaveBeenCalledWith('/login')
    );
  }));

});
