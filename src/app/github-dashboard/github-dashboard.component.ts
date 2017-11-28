import {Component, OnInit} from "@angular/core";
import {DataService} from "../Services/data.service";

@Component ({
  selector: 'github-dashboard',
  templateUrl: './github-dashboard.component.html',
  styleUrls: ['./github-dashboard.component.css'],
  providers:[DataService]
})
export class GitHubDashboard implements OnInit{

  constructor(private dataService: DataService) {
  }

  gitHubUser: Array<any> = [];

  ngOnInit(): void {
    this.dataService.getUsers("").subscribe(data=>{
      this.gitHubUser = data;
    })
  }

  goToNextPage(next:boolean){
    let lastId = "";
    if(next) {
      lastId = this.gitHubUser[this.gitHubUser.length - 1].id;
    }
    console.log(lastId);
    this.dataService.getUsers(lastId).subscribe(data=>{
      this.gitHubUser = data;
      console.log(data)
    });
  }
}
