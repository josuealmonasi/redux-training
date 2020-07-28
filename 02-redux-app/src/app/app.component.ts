import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counter: number;

  constructor() {
    this.counter = 10;
  }

  /**
   * increase
   */
  public increase(): void {
    this.counter += 1;
  }

  /**
   * decrease
   */
  public decrease(): void {
    this.counter -= 1;
  }
}
