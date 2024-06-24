import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselbootComponent } from './carouselboot.component';

describe('CarouselbootComponent', () => {
  let component: CarouselbootComponent;
  let fixture: ComponentFixture<CarouselbootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselbootComponent]
    });
    fixture = TestBed.createComponent(CarouselbootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
