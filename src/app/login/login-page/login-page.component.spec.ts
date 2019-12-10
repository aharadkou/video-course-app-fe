import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { UserService } from 'src/app/core/services/user.service';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  const userServiceSpy: Partial<UserService> = jasmine.createSpyObj(
    {
      login: new Observable()
    }
  );
  const routerSpy: Partial<Router> = jasmine.createSpyObj(['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPageComponent ],
      providers: [
        { provide: UserService, useValue: userServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should invoke service login method after login button pressed ', () => {
    fixture.debugElement.query(By.css('.login-button')).triggerEventHandler('click', null);
    expect(userServiceSpy.login).toHaveBeenCalled();
  });
});
