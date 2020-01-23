import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService } from './user.service';
import { AUTHENTICATION_URL } from '../constants/constants';

describe('UserService', () => {

  let service: UserService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.get(UserService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('login', () => {
    it('should send credentials in post request and receive token in response', () => {
      const expectedLogin = 'dadaya@gmail.com';
      const expectedPassword = '12345';
      const expectedToken = 'token';
      service.login(expectedLogin, expectedPassword).subscribe(
        response => {
          expect(response.token).toBe(expectedToken);
          expect(response.user.email).toBe(expectedLogin);
        }
      );
      const request = httpMock.expectOne(`${AUTHENTICATION_URL}/login`);
      expect(request.request.method).toBe('POST');
      request.flush({ token: expectedToken, user: { email: expectedLogin } });
      localStorage.clear();
    });
  });

});
