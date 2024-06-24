import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipPageComponent } from './scholarship-page.component';

describe('ScholarshipPageComponent', () => {
  let component: ScholarshipPageComponent;
  let fixture: ComponentFixture<ScholarshipPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScholarshipPageComponent]
    });
    fixture = TestBed.createComponent(ScholarshipPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
