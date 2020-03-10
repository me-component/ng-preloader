import { TestBed } from '@angular/core/testing';

import { NgPreloaderService } from './ng-preloader.service';

describe('NgPreloaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgPreloaderService = TestBed.get(NgPreloaderService);
    expect(service).toBeTruthy();
  });
});
