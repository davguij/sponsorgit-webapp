import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepoDetailService } from './repo-detail.service';
import { RepoDetail } from 'app/repo-detail/repo-detail.interface';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.scss']
})
export class RepoDetailComponent implements OnInit {

  repo: RepoDetail;
  realRepo;

  constructor(private repoDetailSrv: RepoDetailService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.repoDetailSrv.getRepoDetails(params['owner'], params['repo'])
        .subscribe((resp) => {
          this.repo = resp;
          console.log(resp);
        });
    });
  }

}
