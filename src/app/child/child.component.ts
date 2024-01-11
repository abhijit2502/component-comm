import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  childmessage!:string;

@Input()
msgfromparentcomponent!:string;

@Output()
emitdata:EventEmitter<string>=new EventEmitter;

sendData(){
this.emitdata.emit(this.childmessage);
}
}
