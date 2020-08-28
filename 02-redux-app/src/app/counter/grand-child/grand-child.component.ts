import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styles: [],
})
export class GrandChildComponent implements OnInit {
  @Input() counter: number;

  constructor() {}

  ngOnInit(): void {}
}
