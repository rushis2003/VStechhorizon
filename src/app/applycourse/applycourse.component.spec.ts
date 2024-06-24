import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplycourseComponent } from './applycourse.component';

describe('ApplycourseComponent', () => {
  let component: ApplycourseComponent;
  let fixture: ComponentFixture<ApplycourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplycourseComponent]
    });
    fixture = TestBed.createComponent(ApplycourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
