import { reset } from './../actions/counter.actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styles: [],
})
export class GrandChildComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  count$: Observable<number>;

  ngOnInit(): void {
    this.count$ = this.store.pipe(select('count'));
  }

  /*
   * reset state
   */
  onReset(): void {
    this.store.dispatch(reset());
  }
}
