import { Component, OnInit } from '@angular/core';
import { RepoListService } from 'app/repo-list/repo-list.service';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnInit {

  repoList;

  constructor(private repolistSrv: RepoListService) { }

  ngOnInit() {
    this.repoList = this.repolistSrv.getRepoList();
  }

}
