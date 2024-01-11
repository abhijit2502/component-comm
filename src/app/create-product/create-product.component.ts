import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
productObj:Product=new Product()

@Output()
sendProductData:EventEmitter<Product>=new EventEmitter();

add(){
  this.sendProductData.emit(this.productObj)
  console.log("product-data",this.productObj)
}
reset(){
  this.productObj = new Product();
}
}
class Product {
  productName!:string;
  price!:number;
  quantity!:number;
}
