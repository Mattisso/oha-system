import { TestBed, inject } from '@angular/core/testing';

import { NttcomptebalancedetailService } from './nttcomptebalancedetail.service';

describe('NttcomptebalancedetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NttcomptebalancedetailService]
    });
  });

  it('should be created', inject([NttcomptebalancedetailService], (service: NttcomptebalancedetailService) => {
    expect(service).toBeTruthy();
  }));
});
