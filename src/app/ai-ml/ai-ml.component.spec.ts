import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiMlComponent } from './ai-ml.component';

describe('AiMlComponent', () => {
  let component: AiMlComponent;
  let fixture: ComponentFixture<AiMlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiMlComponent]
    });
    fixture = TestBed.createComponent(AiMlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
