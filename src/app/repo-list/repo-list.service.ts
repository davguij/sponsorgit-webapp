import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RepoListService {

  constructor(private http: Http) { }

  getRepoList() {
    return this.http.get('http://localhost:8080/repos?lang=javascript')
      .map(response => {
        let json = response.json();
        return json.data.items;
      });
  }

}
