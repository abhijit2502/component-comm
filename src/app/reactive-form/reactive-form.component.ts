import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {


  userRegForm!: FormGroup

  ngOnInit() {
    this.userRegForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10), Validators.pattern('[a-zA-Z]')]),
      lastName: new FormControl('', [Validators.required]),
      mobileNo: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required])
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
