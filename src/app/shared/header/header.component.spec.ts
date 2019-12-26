import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { IconsModule } from 'src/app/icons/icons.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { By } from '@angular/platform-browser';
import { createObservable } from 'src/app/core/utils/observable-utils';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const userServiceSpy = jasmine.createSpyObj(['logout', 'getUserInfo']);

  beforeEach(async(() => {
    userServiceSpy.isAuthenticated = jasmine.createSpy('isAuthenticated').and.returnValue(
      createObservable(true)
    );
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ IconsModule, RouterTestingModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ {provide: UserService, useValue: userServiceSpy} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    TestBed.get(Router).navigate = jasmine.createSpy();
    fixture.detectChanges();
  });

  it('should invoke logout service method', () => {
    fixture.debugElement.query(By.css('.logout-button')).triggerEventHandler('click', null);
    expect(userServiceSpy.logout).toHaveBeenCalled();
  });
});
