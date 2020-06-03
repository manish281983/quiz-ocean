import { TestBed } from '@angular/core/testing';

import { DashboardHelperService } from './dashboard-helper.service';

describe('DashboardHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardHelperService = TestBed.get(DashboardHelperService);
    expect(service).toBeTruthy();
  });
});
