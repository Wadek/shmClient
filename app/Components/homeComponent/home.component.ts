import { Component }  from '@angular/core';
import { Auth }       from '../../Services/Auth/auth.service';
import {dashboardComponent} from '../dashboard/dashboard';
@Component({
  selector: 'home',
    template:`
    <div *ngIf="auth.authenticated()"><dashboard></dashboard></div>
<h4 *ngIf="!auth.authenticated()">You are not logged in, please click 'Log in' button to login</h4>
    `
})

export class HomeComponent {

  constructor(private auth: Auth) {}
};
