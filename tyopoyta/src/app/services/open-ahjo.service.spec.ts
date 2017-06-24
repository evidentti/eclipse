import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, JsonpModule } from '@angular/http';

import { OpenAhjoService } from './open-ahjo.service';

describe('OpenAhjoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenAhjoService],
      imports: [
        HttpModule,
        JsonpModule
      ]
    });
  });

  it('should be created', inject([OpenAhjoService], (service: OpenAhjoService) => {
    expect(service).toBeTruthy();
  }));
});
