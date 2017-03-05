/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RepoListComponent } from './repo-list.component';
import { RepoListService } from './repo-list.service';

const serviceData = [
  // tslint:disable:indent
  {
    'id': 911765,
    'name': 'diaspora',
    'full_name': 'diaspora/diaspora',
    'owner': {
      'login': 'diaspora',
      'id': 293207,
      'avatar_url': 'https://avatars0.githubusercontent.com/u/293207?v=3',
      'gravatar_id': '',
      'url': 'https://api.github.com/users/diaspora',
      'html_url': 'https://github.com/diaspora',
      'followers_url': 'https://api.github.com/users/diaspora/followers',
      'following_url': 'https://api.github.com/users/diaspora/following{/other_user}',
      'gists_url': 'https://api.github.com/users/diaspora/gists{/gist_id}',
      'starred_url': 'https://api.github.com/users/diaspora/starred{/owner}{/repo}',
      'subscriptions_url': 'https://api.github.com/users/diaspora/subscriptions',
      'organizations_url': 'https://api.github.com/users/diaspora/orgs',
      'repos_url': 'https://api.github.com/users/diaspora/repos',
      'events_url': 'https://api.github.com/users/diaspora/events{/privacy}',
      'received_events_url': 'https://api.github.com/users/diaspora/received_events',
      'type': 'Organization',
      'site_admin': false
    },
    'private': false,
    'html_url': 'https://github.com/diaspora/diaspora',
    'description': 'A privacy-aware, distributed, open source social network.',
    'fork': false,
    'url': 'https://api.github.com/repos/diaspora/diaspora',
    'forks_url': 'https://api.github.com/repos/diaspora/diaspora/forks',
    'keys_url': 'https://api.github.com/repos/diaspora/diaspora/keys{/key_id}',
    'collaborators_url': 'https://api.github.com/repos/diaspora/diaspora/collaborators{/collaborator}',
    'teams_url': 'https://api.github.com/repos/diaspora/diaspora/teams',
    'hooks_url': 'https://api.github.com/repos/diaspora/diaspora/hooks',
    'issue_events_url': 'https://api.github.com/repos/diaspora/diaspora/issues/events{/number}',
    'events_url': 'https://api.github.com/repos/diaspora/diaspora/events',
    'assignees_url': 'https://api.github.com/repos/diaspora/diaspora/assignees{/user}',
    'branches_url': 'https://api.github.com/repos/diaspora/diaspora/branches{/branch}',
    'tags_url': 'https://api.github.com/repos/diaspora/diaspora/tags',
    'blobs_url': 'https://api.github.com/repos/diaspora/diaspora/git/blobs{/sha}',
    'git_tags_url': 'https://api.github.com/repos/diaspora/diaspora/git/tags{/sha}',
    'git_refs_url': 'https://api.github.com/repos/diaspora/diaspora/git/refs{/sha}',
    'trees_url': 'https://api.github.com/repos/diaspora/diaspora/git/trees{/sha}',
    'statuses_url': 'https://api.github.com/repos/diaspora/diaspora/statuses/{sha}',
    'languages_url': 'https://api.github.com/repos/diaspora/diaspora/languages',
    'stargazers_url': 'https://api.github.com/repos/diaspora/diaspora/stargazers',
    'contributors_url': 'https://api.github.com/repos/diaspora/diaspora/contributors',
    'subscribers_url': 'https://api.github.com/repos/diaspora/diaspora/subscribers',
    'subscription_url': 'https://api.github.com/repos/diaspora/diaspora/subscription',
    'commits_url': 'https://api.github.com/repos/diaspora/diaspora/commits{/sha}',
    'git_commits_url': 'https://api.github.com/repos/diaspora/diaspora/git/commits{/sha}',
    'comments_url': 'https://api.github.com/repos/diaspora/diaspora/comments{/number}',
    'issue_comment_url': 'https://api.github.com/repos/diaspora/diaspora/issues/comments{/number}',
    'contents_url': 'https://api.github.com/repos/diaspora/diaspora/contents/{+path}',
    'compare_url': 'https://api.github.com/repos/diaspora/diaspora/compare/{base}...{head}',
    'merges_url': 'https://api.github.com/repos/diaspora/diaspora/merges',
    'archive_url': 'https://api.github.com/repos/diaspora/diaspora/{archive_format}{/ref}',
    'downloads_url': 'https://api.github.com/repos/diaspora/diaspora/downloads',
    'issues_url': 'https://api.github.com/repos/diaspora/diaspora/issues{/number}',
    'pulls_url': 'https://api.github.com/repos/diaspora/diaspora/pulls{/number}',
    'milestones_url': 'https://api.github.com/repos/diaspora/diaspora/milestones{/number}',
    'notifications_url': 'https://api.github.com/repos/diaspora/diaspora/notifications{?since,all,participating}',
    'labels_url': 'https://api.github.com/repos/diaspora/diaspora/labels{/name}',
    'releases_url': 'https://api.github.com/repos/diaspora/diaspora/releases{/id}',
    'deployments_url': 'https://api.github.com/repos/diaspora/diaspora/deployments',
    'created_at': '2010-09-15T05:20:04Z',
    'updated_at': '2017-03-04T19:45:52Z',
    'pushed_at': '2017-03-05T15:29:48Z',
    'git_url': 'git://github.com/diaspora/diaspora.git',
    'ssh_url': 'git@github.com:diaspora/diaspora.git',
    'clone_url': 'https://github.com/diaspora/diaspora.git',
    'svn_url': 'https://github.com/diaspora/diaspora',
    'homepage': 'https://diasporafoundation.org/',
    'size': 101099,
    'stargazers_count': 11115,
    'watchers_count': 11115,
    'language': 'Ruby',
    'has_issues': true,
    'has_downloads': true,
    'has_wiki': true,
    'has_pages': false,
    'forks_count': 2811,
    'mirror_url': null,
    'open_issues_count': 404,
    'forks': 2811,
    'open_issues': 404,
    'watchers': 11115,
    'default_branch': 'develop',
    'score': 1
  }
];

class MockRepoListSrv {
  getRepoList(...lang) {
    return new Observable(subscriber => {
      subscriber.next(serviceData);
    });
  }
}

describe('RepoListComponent', () => {
  let component: RepoListComponent;
  let fixture: ComponentFixture<RepoListComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [RepoListComponent],
      providers: [{ provide: RepoListService, useClass: MockRepoListSrv }],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
