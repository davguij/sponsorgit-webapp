/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RepoDetailService } from './repo-detail.service';

describe('RepoDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepoDetailService]
    });
  });

  it('should ...', inject([RepoDetailService], (service: RepoDetailService) => {
    expect(service).toBeTruthy();
  }));
});
