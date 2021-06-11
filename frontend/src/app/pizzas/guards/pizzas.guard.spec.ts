import { TestBed } from '@angular/core/testing';

import { PizzasGuard } from './pizzas.guard';

describe('PizzasGuard', () => {
  let guard: PizzasGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PizzasGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
