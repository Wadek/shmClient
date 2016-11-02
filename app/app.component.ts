import { Component }         from '@angular/core';
import { Auth }              from './Services/Auth/auth.service';

@Component({
    selector: 'my-app',
    providers: [ Auth ],
    templateUrl: 'app/app.template.html'
})

export class AppComponent {
  constructor(private auth: Auth) {}
};

