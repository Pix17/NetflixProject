import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupRegformComponent } from './signup-regform.component';

describe('SignupRegformComponent', () => {
  let component: SignupRegformComponent;
  let fixture: ComponentFixture<SignupRegformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupRegformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupRegformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
