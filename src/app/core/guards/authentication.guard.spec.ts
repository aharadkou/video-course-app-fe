import { TestBed, async } from '@angular/core/testing';

import { AuthenticationGuard } from './authentication.guard';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MemoizedSelector, Store } from '@ngrx/store';
import { AppState } from 'src/app/store/states/app.state';
import { selectIsAuthenticated } from 'src/app/store/selectors/authentication.selectors';

describe('AuthenticationGuard', () => {
  let router: Router;
  let guard: AuthenticationGuard;
  let store: MockStore<AppState>;
  let mockIsAuthenticatedSelector: MemoizedSelector<AppState, boolean>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthenticationGuard,
        provideMockStore()
      ],
      imports: [RouterTestingModule],
    });
    router = TestBed.get(Router);
    router.navigateByUrl = jasmine.createSpy();
    guard = TestBed.get(AuthenticationGuard);
    store = TestBed.get(Store);
    mockIsAuthenticatedSelector = store.overrideSelector(selectIsAuthenticated, false);
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
