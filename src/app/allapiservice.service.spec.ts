import { TestBed } from '@angular/core/testing';

import { AllapiserviceService } from './allapiservice.service';

describe('AllapiserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllapiserviceService = TestBed.get(AllapiserviceService);
    expect(service).toBeTruthy();
  });
});
