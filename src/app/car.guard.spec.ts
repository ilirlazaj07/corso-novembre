import { TestBed, async, inject } from '@angular/core/testing';

import { CarGuard } from './car.guard';

describe('CarGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarGuard]
    });
  });

  it('should ...', inject([CarGuard], (guard: CarGuard) => {
    expect(guard).toBeTruthy();
  }));
});
