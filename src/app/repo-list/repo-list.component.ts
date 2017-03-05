import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { RepoListService } from 'app/repo-list/repo-list.service';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnInit {

  allLangs: Array<string> = [
    'javascript',
    'java',
    'ruby',
    'go',
    'html',
    'css',
    'typescript'
  ];

  filteredLangs: Array<string> = [];

  repoList;

  constructor(private repolistSrv: RepoListService) { }

  ngOnInit() {
    this.allLangs.sort();
    this.filteredLangs = this.allLangs.slice();
    this.getRepos(this.filteredLangs);
  }

  getRepos(...langs) {
    this.repoList = this.repolistSrv.getRepoList(...langs);
  }

  clickOnLang($event) {
    if (this.filteredLangs.indexOf($event.target.id) === -1) {
      this.filteredLangs.push($event.target.id);
    } else {
      _.pull(this.filteredLangs, $event.target.id);
    }
    this.getRepos(this.filteredLangs);
  }

  isLangSelected(lang) {
    return this.filteredLangs.indexOf(lang) !== -1;
  }

}
