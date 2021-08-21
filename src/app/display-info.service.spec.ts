import { TestBed } from '@angular/core/testing';

import { DisplayInfoService } from './display-info.service';

describe('DisplayInfoService', () => {
  let service: DisplayInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
