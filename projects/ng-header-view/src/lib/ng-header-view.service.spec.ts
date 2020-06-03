import { TestBed } from '@angular/core/testing';

import { NgHeaderViewService } from './ng-header-view.service';

describe('NgHeaderViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgHeaderViewService = TestBed.get(NgHeaderViewService);
    expect(service).toBeTruthy();
  });
});
