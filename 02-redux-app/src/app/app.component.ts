import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Component } from '@angular/core';
import { increment, decrement } from './counter/actions/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /* counter: number; */
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
    /* this.store.subscribe(state => {
      this.counter = state.count;
    }); Subscription */
  }

  /**
   * increase
   */
  public increase(): void {
    this.store.dispatch(increment());
  }

  /**
   * decrease
   */
  public decrease(): void {
    this.store.dispatch(decrement());
  }
}
