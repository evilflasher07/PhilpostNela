import { TestBed, inject } from '@angular/core/testing';

import { AreaGeneratorService } from './area-generator.service';

describe('AreaGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AreaGeneratorService]
    });
  });

  it('should be created', inject([AreaGeneratorService], (service: AreaGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
