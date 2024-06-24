import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitBuyFormSuccessDialogComponent } from './kit-buy-form-success-dialog.component';

describe('KitBuyFormSuccessDialogComponent', () => {
  let component: KitBuyFormSuccessDialogComponent;
  let fixture: ComponentFixture<KitBuyFormSuccessDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KitBuyFormSuccessDialogComponent]
    });
    fixture = TestBed.createComponent(KitBuyFormSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
