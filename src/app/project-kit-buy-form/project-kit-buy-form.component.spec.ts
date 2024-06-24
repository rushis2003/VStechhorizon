import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectKitBuyFormComponent } from './project-kit-buy-form.component';

describe('ProjectKitBuyFormComponent', () => {
  let component: ProjectKitBuyFormComponent;
  let fixture: ComponentFixture<ProjectKitBuyFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectKitBuyFormComponent]
    });
    fixture = TestBed.createComponent(ProjectKitBuyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
