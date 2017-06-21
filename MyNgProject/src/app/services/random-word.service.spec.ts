import { TestBed, inject } from '@angular/core/testing';

import { RandomWordService } from './random-word.service';

describe('RandomWordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomWordService]
    });
  });

  it('should be created', inject([RandomWordService], (service: RandomWordService) => {
    expect(service).toBeTruthy();
  }));
});
