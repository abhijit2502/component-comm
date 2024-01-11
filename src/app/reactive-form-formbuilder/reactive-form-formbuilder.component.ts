import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-formbuilder',
  templateUrl: './reactive-form-formbuilder.component.html',
  styleUrls: ['./reactive-form-formbuilder.component.css']
})
export class ReactiveFormFormbuilderComponent {

  userRegForm!:FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.userRegForm=this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10), Validators.pattern('[a-zA-Z]')]],
      lastName: ['', [Validators.required]],
      mobileNo: ['', []],
      email: ['', []],
      // address:this.fb.group({
      //   line1:['',[Validators.required]],
      //   city:['',[]],
      //   state:['',[]]
      // })
    })
  }

  
  save() {
    console.log("form Data ", this.userRegForm);
    console.log("form Data ", this.userRegForm.value);
  }

  get lastName() {
    return this.userRegForm.get('lastName');
  }

  responseObj: any = {
    "firstName": "Sachin",
    "lastName": "Tendular",
    "mobileNo": 9090909090,
    "email": "test@gmail.com",
  }

  setData() {
    var responseObj: any = {
      "firstName": "Sachin",
      "lastName": "Tendular",
      "mobileNo": 9090909090,
      "email": "test@gmail.com",
    }
    this.userRegForm.setValue(responseObj);
  }

  patch() {
    var responseObj: any = {
      "firstName": "Sachin",
      "lastName": "Tendular",
      "mobileNo": 9090909090,
      "emailId": "test@gmail.com",
    }
    this.userRegForm.patchValue(responseObj);
  }

  Reset() {
    this.userRegForm.reset();
  }
}

