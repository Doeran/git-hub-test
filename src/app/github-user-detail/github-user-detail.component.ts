import {Component, OnInit} from "@angular/core";
import {DataService} from "../Services/data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'user-detail',
  templateUrl: './github-user-detail.component.html',
  styleUrls:['./github-user-detail.component.css']
})

export class GitHubUserDetail implements OnInit {

  constructor(private dataService: DataService,
              private route: ActivatedRoute) {
  }

  userDetail: any;
  userRepos: any= [];

  ngOnInit(): void {
    const login = this.route.snapshot.paramMap.get('login');
    this.dataService.getUserDetail(login).subscribe(userData => {
      this.userDetail = userData;
    });
    this.dataService.getUserRepos(login).subscribe(userRepo => {
      this.userRepos = userRepo;
    });
  }

  saveRepo(repo):void{
    this.dataService.setChooseRepo(repo);
  }

}
