import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServivePageOverviewComponent } from './servive-page-overview.component';

describe('ServivePageOverviewComponent', () => {
  let component: ServivePageOverviewComponent;
  let fixture: ComponentFixture<ServivePageOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServivePageOverviewComponent]
    });
    fixture = TestBed.createComponent(ServivePageOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
