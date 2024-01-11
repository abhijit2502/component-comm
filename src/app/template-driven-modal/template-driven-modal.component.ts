import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-modal',
  templateUrl: './template-driven-modal.component.html',
  styleUrls: ['./template-driven-modal.component.css']
})
export class TemplateDrivenModalComponent {


  productObj: Product = new Product();

  save(form: any) {
    console.log("form data without modal", form.value);
    console.log("form data with modal", this.productObj);

  }

}
class Product {
  FirstName!: string;
  LastName!: string;
  MobileNo!: number;
  EmailId!: string;
}