import { TestBed } from '@angular/core/testing';

import { TaxiRideService } from './taxi-ride.service';

describe('TaxiRideService', () => {
  let service: TaxiRideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxiRideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
