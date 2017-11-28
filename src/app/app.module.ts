import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list'
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import {GitHubDashboard} from "./github-dashboard/github-dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import {DataService} from "./Services/data.service";
import {GitHubUserDetail} from "./github-user-detail/github-user-detail.component";
import {RepoDetailComponent} from "./repo-detail/repo-detail.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    GitHubDashboard,
    GitHubUserDetail,
    RepoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
