import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-random-words',
  templateUrl: './random-words.component.html',
  styleUrls: ['./random-words.component.css']
})
export class RandomWordsComponent implements OnInit {
  @Input() words: Array<string>;
  @Input() items: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
