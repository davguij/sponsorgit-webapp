import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RepoListService {

  constructor(private http: Http) { }

  getRepoList(...languages) {
    let url = `https://sponsorgit-api.herokuapp.com/repos?lang=${languages}`;
    return this.http.get(url)
      .map(response => {
        let json = response.json();
        return json.data.items;
      });
  }

}
