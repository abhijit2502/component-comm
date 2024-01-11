import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-employee-list',
  templateUrl: './child-employee-list.component.html',
  styleUrls: ['./child-employee-list.component.css']
})
export class ChildEmployeeListComponent {

  @Output() 
  childEvent = new EventEmitter();
 
  onSelectJavaDeveloper(value : string) {
      this.childEvent.emit(value);
   }
   onSelectAngularDeveloper(){
    this.childEvent.emit("Angular Developer");
   }


}
