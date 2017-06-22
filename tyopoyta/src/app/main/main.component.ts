import { Component, Input } from '@angular/core';
import { AgendaItemInterface } from '../models/agendaiteminterface';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends BaseComponent {
  @Input() items: Array<AgendaItemInterface>;
  @Input() errorMessage: string;

  constructor() {
    super();
    this.componentName = 'MainComponent';
  }

}
