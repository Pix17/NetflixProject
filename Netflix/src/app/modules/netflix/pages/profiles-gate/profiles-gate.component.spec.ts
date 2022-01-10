import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesGateComponent } from './profiles-gate.component';

describe('ProfilesGateComponent', () => {
  let component: ProfilesGateComponent;
  let fixture: ComponentFixture<ProfilesGateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilesGateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesGateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
