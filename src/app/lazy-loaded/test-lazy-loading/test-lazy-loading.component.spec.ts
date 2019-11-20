import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLazyLoadingComponent } from './test-lazy-loading.component';

describe('TestLazyLoadingComponent', () => {
  let component: TestLazyLoadingComponent;
  let fixture: ComponentFixture<TestLazyLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLazyLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLazyLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
