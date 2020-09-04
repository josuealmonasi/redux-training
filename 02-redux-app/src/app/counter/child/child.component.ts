import { multiply, divide } from './../actions/counter.actions';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [],
})
export class ChildComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  count$: Observable<number>;

  ngOnInit(): void {
    this.count$ = this.store.pipe(select('count'));
  }

  /**
   * multiply
   */
  public multiply(): void {
    this.store.dispatch(multiply({ factor: 5 }));
  }

  /**
   * divide
   */
  public divide(): void {
    this.store.dispatch(divide({ factor: 3 }));
  }
}
