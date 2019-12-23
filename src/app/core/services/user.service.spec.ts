import { async } from '@angular/core/testing';

import { UserService } from './user.service';
import { KEY_USER_INFO, KEY_USER_PASSWORD, KEY_TOKEN } from '../constants/constants';

describe('UserService', () => {

  const service: UserService = new UserService();

  describe('login', () => {
    it('should add login, password and token to local storage(valid login and password)', () => {
      const expectedLogin = 'dadaya@gmail.com';
      const expectedPassword = '12345';
      service.login(expectedLogin, expectedPassword);
      expect(expectedLogin).toBe(localStorage.getItem(KEY_USER_INFO));
      expect(expectedPassword).toBe(localStorage.getItem(KEY_USER_PASSWORD));
      expect(localStorage.getItem(KEY_TOKEN)).toBeTruthy();
      localStorage.clear();
    });

    it('should throw error(invalid login and password) ', async(() => {
      const invalidLogin = 'log';
      const invalidPassword = 'pas';
      service.login(invalidLogin, invalidPassword).subscribe(
        {
          error: (error: Error) => expect(error).toBeTruthy()
        }
      );
    }));
  });

  describe('logout', () => {
    it('should clear local storage', () => {
      localStorage.setItem('key', 'val');
      service.logout();
      expect(localStorage.length).toBe(0);
    });
  });

  describe('isAuthenticated', () => {
    it('should return true if token exists in local storage', async(() => {
      localStorage.setItem(KEY_TOKEN, 'val');
      service.isAuthenticated().subscribe(flag => {
        expect(flag).toBeTruthy();
        localStorage.clear();
      });
    }));

    it('should return false if token isnt exists in local storage', async(() => {
      service.isAuthenticated().subscribe(flag => {
        expect(flag).not.toBeTruthy();
      });
    }));
  });

  describe('getUserInfo', () => {
    it('should return user login from local storage', async(() => {
      const userLogin = 'login';
      localStorage.setItem(KEY_USER_INFO, userLogin);
      service.getUserInfo().subscribe(login => {
        expect(login).toBe(userLogin);
        localStorage.clear();
      });
    }));
  });
});
