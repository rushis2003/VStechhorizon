import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AAuthLoginComponent } from './a-auth-login.component';

describe('AAuthLoginComponent', () => {
  let component: AAuthLoginComponent;
  let fixture: ComponentFixture<AAuthLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AAuthLoginComponent]
    });
    fixture = TestBed.createComponent(AAuthLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
