import { TestBed } from '@angular/core/testing';

import { CategoryHelperService } from './category-helper.service';

describe('CategoryHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryHelperService = TestBed.get(CategoryHelperService);
    expect(service).toBeTruthy();
  });
});
