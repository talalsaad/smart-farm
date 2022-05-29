import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircalComponent } from './circal.component';

describe('CircalComponent', () => {
  let component: CircalComponent;
  let fixture: ComponentFixture<CircalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
