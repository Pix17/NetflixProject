import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsMainComponent } from './us-main.component';

describe('UsMainComponent', () => {
  let component: UsMainComponent;
  let fixture: ComponentFixture<UsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
