import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { FooterTodoComponent } from './footer-todo/footer-todo.component';
import { ItemTodoComponent } from './item-todo/item-todo.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { LandingTodoPageComponent } from './landing-todo-page/landing-todo-page.component';

@NgModule({
  declarations: [
    AddTodoComponent,
    FooterTodoComponent,
    ItemTodoComponent,
    ListTodoComponent,
    LandingTodoPageComponent,
  ],
  imports: [CommonModule],
  exports: [LandingTodoPageComponent],
})
export class TodoModule {}
