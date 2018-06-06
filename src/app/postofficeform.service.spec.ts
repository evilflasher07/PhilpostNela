import { TestBed, inject } from '@angular/core/testing';

import { PostofficeformService } from './postofficeform.service';

describe('PostofficeformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostofficeformService]
    });
  });

  it('should be created', inject([PostofficeformService], (service: PostofficeformService) => {
    expect(service).toBeTruthy();
  }));
});
