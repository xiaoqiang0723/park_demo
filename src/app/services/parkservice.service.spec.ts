import { TestBed } from '@angular/core/testing';

import { ParkserviceService } from './parkservice.service';

describe('ParkserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParkserviceService = TestBed.get(ParkserviceService);
    expect(service).toBeTruthy();
  });
});
