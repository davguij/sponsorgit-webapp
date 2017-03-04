/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RepoListService } from './repo-list.service';

describe('RepoListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepoListService]
    });
  });

  it('should ...', inject([RepoListService], (service: RepoListService) => {
    expect(service).toBeTruthy();
  }));
});
