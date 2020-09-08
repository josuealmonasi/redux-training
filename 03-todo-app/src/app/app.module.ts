import { TodoModule } from './todos/todo.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [BrowserModule, TodoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
