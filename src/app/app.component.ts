import { Component } from '@angular/core';
import {routerTransition} from "./route.animation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [ routerTransition ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHub Test';

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
