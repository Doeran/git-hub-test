import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {GitHubDashboard} from "./github-dashboard/github-dashboard.component";
import {GitHubUserDetail} from "./github-user-detail/github-user-detail.component";
import {RepoDetailComponent} from "./repo-detail/repo-detail.component";

const routes: Routes = [
  {
    path: '', redirectTo: '/dashboard', pathMatch: 'full',
  },
  {
    path: 'dashboard', component: GitHubDashboard, data: {state: 'dashboard'}
  },
  {
  path: 'detail/:login', component: GitHubUserDetail, data: {state: 'detail'}
  },
  {
    path: 'repo-detail', component: RepoDetailComponent, data: {state: 'repodetail'}
  },
  { path: '**', component: GitHubDashboard }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
