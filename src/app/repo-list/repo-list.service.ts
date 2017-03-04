import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RepoListService {

  constructor(private http: Http) { }

  getRepoList(...languages) {
    let url = `http://localhost:8080/repos?lang=${languages}`;
    return this.http.get(url)
      .map(response => {
        let json = response.json();
        return json.data.items;
      });
  }

}
