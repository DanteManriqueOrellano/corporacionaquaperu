import { TestBed } from '@angular/core/testing';

import { ComMatService } from './com-mat.service';

describe('ComMatService', () => {
  let service: ComMatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComMatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
