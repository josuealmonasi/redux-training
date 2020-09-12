import { TodoModule } from './todos/todo.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todos/reducers/todos.reducer';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    TodoModule,
    StoreModule.forRoot({ todos: todoReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
