import { TestBed } from '@angular/core/testing';

import { JwtDecoderRkService } from './jwt-decoder-rk.service';

describe('JwtDecoderRkService', () => {
  let service: JwtDecoderRkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtDecoderRkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
