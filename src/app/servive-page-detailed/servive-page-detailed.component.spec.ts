import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServivePageDetailedComponent } from './servive-page-detailed.component';

describe('ServivePageDetailedComponent', () => {
  let component: ServivePageDetailedComponent;
  let fixture: ComponentFixture<ServivePageDetailedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServivePageDetailedComponent]
    });
    fixture = TestBed.createComponent(ServivePageDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
