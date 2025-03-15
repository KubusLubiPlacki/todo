import { Component } from '@angular/core';
import { TodoList } from './todoList';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
  private list=new TodoList("Jakub",[
    new TodoItem("Iść pobiegać",true),
    new TodoItem("Kupić kwiaty"),
    new TodoItem("Odebrać bilety")
  ]);
  get username():string{
    return this.list.user;
  }
  get itemCount():number{
    return this.items.length;
  }
  get items():readonly TodoItem[]{
    return this.list.items.filter(item=>this.showComplete || !item.complete);
  }
  addItem(newItem){
    if(newItem!=""){
      this.list.addItem(newItem);
    }
  }
  showComplete:boolean=false;
}
