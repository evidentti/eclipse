import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, Input } from '@angular/core';
import { AgendaItemInterface } from '../models/agendaiteminterface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy, OnChanges {
  @Input() items: Array<AgendaItemInterface>;
  @Input() errorMessage: string;

  constructor() { }

  ngOnInit() {
    console.log('MainComponent', 'ngOnInit()');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('MainComponent', 'ngOnChanges()', changes);
  }

  ngOnDestroy() {
    console.log('MainComponent', 'ngOnDestroy()');
  }

}
