import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../Services/data.service";
@Component({
  selector: 'repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.css']
})
export class RepoDetailComponent implements OnInit {

  fullname: string;
  branchesList: any;
  commitsList:any;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
  }

  repoData: any;

  ngOnInit(): void {
    this.fullname = this.route.snapshot.paramMap.get('fullname');
    this.repoData = this.dataService.getChooseRepo();
    if (this.repoData.length === 0){
      this.dataService.getRepoByName(this.fullname).subscribe(data=> this.repoData = data);
    }
    this.dataService.getBranches(this.fullname).subscribe(data => this.branchesList = data);
  }

  showCommits(){
    this.dataService.getCommitsByRepo(this.fullname).subscribe(data => this.commitsList = data);
  }
}
