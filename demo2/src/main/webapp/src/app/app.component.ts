import { Component } from '@angular/core';
import { Log, Level } from 'ng2-logger';

const log = Log.create('AppComponent');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor() {
    log.d('constructor', AppComponent);
    log.er('constructor', AppComponent);
    log.i('constructor', AppComponent);
    log.w('constructor', AppComponent);
  }
}
