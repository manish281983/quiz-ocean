import { TestBed } from '@angular/core/testing';

import { CartHelperService } from './cart-helper.service';

describe('CartHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartHelperService = TestBed.get(CartHelperService);
    expect(service).toBeTruthy();
  });
});
