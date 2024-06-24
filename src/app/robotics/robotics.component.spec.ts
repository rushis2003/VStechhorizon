import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticsComponent } from './robotics.component';

describe('RoboticsComponent', () => {
  let component: RoboticsComponent;
  let fixture: ComponentFixture<RoboticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoboticsComponent]
    });
    fixture = TestBed.createComponent(RoboticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
