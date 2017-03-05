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

import { repoList } from './repo-list.mock';
import { RepoListService } from './repo-list.service';

describe('RepoListService', () => {
  let backend: MockBackend;
  let service: RepoListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        RepoListService,
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
  it('should initialize correctly', inject([RepoListService], (service: RepoListService) => {
    expect(service).toBeTruthy();
  }));

  // tslint:disable-next-line:no-shadowed-variable
  it('should retrieve valid data', inject([RepoListService, MockBackend], (service: RepoListService, mock: MockBackend) => {
    let mockResponse = new Response(new ResponseOptions({ 'body': JSON.stringify(repoList) }));
    mock.connections.subscribe(c => c.mockRespond(mockResponse));
    service.getRepoList('javascript').subscribe((response) => {
      expect(response).toBeTruthy();
      expect(response.length).toBeTruthy();
    });
  }));

});
