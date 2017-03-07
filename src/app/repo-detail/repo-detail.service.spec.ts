/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import {
  BaseRequestOptions,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

// import { repoList } from './repo-list.mock';
import { RepoDetailService } from './repo-detail.service';

describe('RepoDetailService', () => {
  let backend: MockBackend;
  let service: RepoDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        RepoDetailService,
        {
          deps: [
            MockBackend,
            BaseRequestOptions
          ],
          provide: Http,
          // tslint:disable-next-line:no-shadowed-variable
          useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        },

      ]
    });
  });

  // tslint:disable-next-line:no-shadowed-variable
  it('should initialize correctly', inject([RepoDetailService], (service: RepoDetailService) => {
    expect(service).toBeTruthy();
  }));

});
