/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { RepoDetailComponent } from './repo-detail.component';
import { RepoDetailService } from './repo-detail.service';

class MockRepoDetailSrv {
  getRepoDetails(owner, repo) {
    return new Observable(subscriber => {
      subscriber.next(false);
    });
  }
}

describe('RepoDetailComponent', () => {
  let component: RepoDetailComponent;
  let fixture: ComponentFixture<RepoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RepoDetailComponent],
      providers: [
        { provide: RepoDetailService, useClass: MockRepoDetailSrv },
        {
          provide: ActivatedRoute, useValue: {
            params: Observable.of({ owner: 'angular', repo: 'angular' })
          }
        },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
