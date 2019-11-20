import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsRoutingComponent } from './cars-routing.component';

describe('CarsRoutingComponent', () => {
  let component: CarsRoutingComponent;
  let fixture: ComponentFixture<CarsRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
