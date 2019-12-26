import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService } from './user.service';
import { KEY_USER_INFO, KEY_TOKEN, COURSE_URL, AUTHENTICATION_URL } from '../constants/constants';

describe('UserService', () => {

  let service: UserService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ UserService ]
    });
    service = TestBed.get(UserService);
    httpMock = TestBed.get(HttpTestingController);
  });

  describe('login', () => {
    it('should add user info and token from server to local storage(valid login and password)', () => {
      const expectedLogin = 'dadaya@gmail.com';
      const expectedPassword = '12345';
      const expectedToken = 'token';
      service.login(expectedLogin, expectedPassword).subscribe(
        userCred => {
          expect(userCred.email).toBe(expectedLogin);
          expect(expectedLogin).toBe(localStorage.getItem(KEY_USER_INFO));
          expect(localStorage.getItem(KEY_TOKEN)).toBe(expectedToken);
        }
      );
      const request = httpMock.expectOne(`${AUTHENTICATION_URL}/login`);
      expect(request.request.method).toBe('POST');
      request.flush({ token: expectedToken });
      localStorage.clear();
    });

  });

  describe('logout', () => {
    it('should clear local storage', () => {
      localStorage.setItem('key', 'val');
      service.logout();
      expect(localStorage.length).toBe(0);
    });
  });

  describe('isAuthenticated', () => {
    it('should return true if token exists in local storage', () => {
      localStorage.setItem(KEY_TOKEN, 'val');
      expect(service.isAuthenticated()).toBeTruthy();
      localStorage.clear();
    });

    it('should return false if token isnt exists in local storage', () => {
      expect(service.isAuthenticated()).not.toBeTruthy();
    });
  });

  describe('getUserInfo', () => {
    it('should return user login from local storage', () => {
      const userLogin = 'login';
      localStorage.setItem(KEY_USER_INFO, userLogin);
      expect(service.getUserInfo()).toBe(userLogin);
    });
  });
});
