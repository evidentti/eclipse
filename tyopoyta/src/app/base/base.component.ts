import { Inject, Injectable, Component, OnChanges, OnInit, DoCheck, OnDestroy, SimpleChanges } from '@angular/core';

@Injectable()

export abstract class BaseComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  componentName = null;

  constructor() { }

  private log(text: string, message: any = '') {
    if (this.componentName) {
      console.log(this.componentName, text, message);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.log('ngOnChanges', changes);
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

}
