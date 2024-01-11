import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
parentdata:string="";

datafromchildcomponent : string="";

getData(data:any){
this.datafromchildcomponent=data;
}
}
