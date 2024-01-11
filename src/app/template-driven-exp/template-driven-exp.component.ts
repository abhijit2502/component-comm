import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-exp',
  templateUrl: './template-driven-exp.component.html',
  styleUrls: ['./template-driven-exp.component.css']
})
export class TemplateDrivenExpComponent {

  save(form:any){
console.log("form data",form.value)
  }

}

