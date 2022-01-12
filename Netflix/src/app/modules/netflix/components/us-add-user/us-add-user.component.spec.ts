import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsAddUserComponent } from './us-add-user.component';

describe('UsAddUserComponent', () => {
  let component: UsAddUserComponent;
  let fixture: ComponentFixture<UsAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsAddUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
