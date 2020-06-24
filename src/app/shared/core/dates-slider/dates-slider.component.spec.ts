import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesSliderComponent } from './dates-slider.component';

describe('DatesSliderComponent', () => {
  let component: DatesSliderComponent;
  let fixture: ComponentFixture<DatesSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatesSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
