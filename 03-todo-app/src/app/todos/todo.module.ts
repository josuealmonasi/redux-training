import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from '@app/todos/add-todo/add-todo.component';
import { FooterTodoComponent } from '@app/todos/footer-todo/footer-todo.component';
import { ItemTodoComponent } from '@app/todos/item-todo/item-todo.component';
import { ListTodoComponent } from '@app/todos/list-todo/list-todo.component';
import { LandingTodoPageComponent } from '@app/todos/landing-todo-page/landing-todo-page.component';

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
