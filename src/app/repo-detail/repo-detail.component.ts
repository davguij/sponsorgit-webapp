import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RepoDetailService } from './repo-detail.service';
import { RepoDetail } from 'app/repo-detail/repo-detail.interface';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.scss']
})
export class RepoDetailComponent implements OnInit, OnDestroy {

  repo: RepoDetail;
  private _subscriptions: Array<Subscription> = [];

  constructor(private repoDetailSrv: RepoDetailService, private route: ActivatedRoute) { }

  ngOnInit() {
    this._subscriptions.push(this.route.params.subscribe((params) => {
      this._subscriptions.push(this.repoDetailSrv.getRepoDetails(params['owner'], params['repo'])
        .subscribe((resp) => {
          this.repo = resp;
        }));
    }));
  }

  ngOnDestroy() {
    this._subscriptions.forEach(element => {
      element.unsubscribe();
    });
  }

}
