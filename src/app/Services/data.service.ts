import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

@Injectable()
export class DataService {

  private gitHubApiUrlUsers = "https://api.github.com/users";
  private gitHubApiUrlRepos = "https://api.github.com/repos";

  constructor(private http: HttpClient) {
  }

  chooseRepo: any = [];

  getUsers(lastId: string): Observable<any> {
    let getUsersUrl = this.gitHubApiUrlUsers;
    if (lastId) {
      getUsersUrl = getUsersUrl + "?since="+ lastId;
    }
    return this.http.get(getUsersUrl)
      .pipe(
        tap(res => res),
        catchError(this.handleError('Some error happened', []))
      );
  }

  getUserDetail(login): Observable<any> {
    let userDetailUrl = this.gitHubApiUrlUsers + "/" + login;
    return this.http.get(userDetailUrl)
      .pipe(
        tap(res => res),
        catchError(this.handleError('Some error happened', []))
      );
  }

  getUserRepos(login): Observable<any> {
    let userReposUrl = this.gitHubApiUrlUsers + "/" + login + '/repos';
    return this.http.get(userReposUrl)
      .pipe(
        tap(res => res),
        catchError(this.handleError('Some error happened', []))
      );
  }

  setChooseRepo(repo): void {
    this.chooseRepo = repo;
  }

  getChooseRepo(): any {
    return this.chooseRepo;
  }

  getBranches(fullName: string): Observable<any> {
    let branchUrl = this.gitHubApiUrlRepos + "/" + fullName + "/branches";
    return this.http.get(branchUrl)
      .pipe(
        tap(res => res),
        catchError(this.handleError('Some error happened', []))
      );
  }

  getCommitsByRepo(fullName: string): Observable<any> {
    let commitUrl = this.gitHubApiUrlRepos + "/" + fullName + '/commits';
    return this.http.get(commitUrl)
      .pipe(
        tap(res => res),
        catchError(this.handleError('Some error happened', []))
      );
  }

  getRepoByName(fullName: string) {
    let repoUrl = this.gitHubApiUrlRepos + "/" + fullName;
    return this.http.get(repoUrl)
      .pipe(
        tap(res => res),
        catchError(this.handleError('Some error happened', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      return of(result as T);
    };
  }


}
