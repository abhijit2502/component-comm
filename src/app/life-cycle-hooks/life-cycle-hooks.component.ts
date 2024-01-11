import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

@Input()message!:string;

constructor(){
console.log("constructor call");
}

ngOnChanges(changes: SimpleChanges): void {
    console.log("ng on changes will be executed");
}

ngOnInit(): void {
    console.log("ngon init will be executed");
}

ngDoCheck(): void {
    console.log("ngdocheck will get executed");
}

ngAfterContentInit(): void {
  console.log("ngAfterContentInit will get executed");
}

ngAfterContentChecked(): void {
  console.log("ngAfterContentChecked will get executed");
}

ngAfterViewInit(): void {
  console.log("ngAfterViewInit will get executed");
}

ngAfterViewChecked(): void {
  console.log("ngAfterViewChecked will get executed");
}

ngOnDestroy(): void {
  console.log("ngOnDestroy will get executed");
}

save(){

}

reset(){

}

}
