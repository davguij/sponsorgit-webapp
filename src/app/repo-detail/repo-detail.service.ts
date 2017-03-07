import { createLanguageService } from 'tslint/lib';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { RepoDetail } from './repo-detail.interface';

@Injectable()
export class RepoDetailService {

    constructor(private http: Http) { }

    getRepoDetails(owner: string, repo: string): Observable<RepoDetail> {
        let url = `https://sponsorgit-api.herokuapp.com/repos/${owner}/${repo}`;
        return Observable.forkJoin(
            this.http.get(`https://sponsorgit-api.herokuapp.com/repos/${owner}/${repo}`).map(resp => resp.json()),
            this.http.get(`https://sponsorgit-api.herokuapp.com/repos/${owner}/${repo}/languages`).map(resp => resp.json())
        ).map((json) => {
            let languages: Array<string> = [];
            for (let language in json[1].data) {
                if (json[1].data.hasOwnProperty(language)) {
                    languages.push(language);
                }
            }
            return {
                languages: languages,
                owner: json[0].data.owner.login,
                repoName: json[0].data.name,
                description: json[0].data.description
            };
        });
    }
}
