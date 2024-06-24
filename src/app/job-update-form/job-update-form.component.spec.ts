import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobUpdateFormComponent } from './job-update-form.component';

describe('JobUpdateFormComponent', () => {
  let component: JobUpdateFormComponent;
  let fixture: ComponentFixture<JobUpdateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobUpdateFormComponent]
    });
    fixture = TestBed.createComponent(JobUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
