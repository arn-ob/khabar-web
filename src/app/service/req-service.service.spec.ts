import { TestBed, inject } from '@angular/core/testing';

import { ReqServiceService } from './req-service.service';

describe('ReqServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReqServiceService]
    });
  });

  it('should be created', inject([ReqServiceService], (service: ReqServiceService) => {
    expect(service).toBeTruthy();
  }));
});
