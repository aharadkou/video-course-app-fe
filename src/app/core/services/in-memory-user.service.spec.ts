import { async } from '@angular/core/testing';

import { InMemoryUserService } from './in-memory-user.service';
import { KEY_USER_LOGIN, KEY_USER_PASSWORD, KEY_TOKEN } from '../constants/constants';

describe('InMemoryUserService', () => {

  const service: InMemoryUserService = new InMemoryUserService();

  describe('login', () => {
    it('should add login, password and token to local storage', () => {
      const expectedLogin = 'log';
      const expectedPassword = 'pas';
      service.login(expectedLogin, expectedPassword);
      expect(expectedLogin).toBe(localStorage.getItem(KEY_USER_LOGIN));
      expect(expectedPassword).toBe(localStorage.getItem(KEY_USER_PASSWORD));
      expect(localStorage.getItem(KEY_TOKEN)).toBeTruthy();
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
      localStorage.setItem(KEY_USER_LOGIN, userLogin);
      service.getUserInfo().subscribe(login => {
        expect(login).toBe(userLogin);
        localStorage.clear();
      });
    }));
  });
});
