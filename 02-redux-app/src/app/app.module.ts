import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './counter/child/child.component';
import { GrandChildComponent } from './counter/grand-child/grand-child.component';
/* NGRx */
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/reducers/counter.reducer';

@NgModule({
  declarations: [AppComponent, ChildComponent, GrandChildComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
