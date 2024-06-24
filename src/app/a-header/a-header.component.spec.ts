import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AHeaderComponent } from './a-header.component';

describe('AHeaderComponent', () => {
  let component: AHeaderComponent;
  let fixture: ComponentFixture<AHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AHeaderComponent]
    });
    fixture = TestBed.createComponent(AHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
