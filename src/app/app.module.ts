import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { TemplateDrivenExpComponent } from './template-driven-exp/template-driven-exp.component';
import { TemplateDrivenModalComponent } from './template-driven-modal/template-driven-modal.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ChildEmployeeListComponent } from './child-employee-list/child-employee-list.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormFormbuilderComponent } from './reactive-form-formbuilder/reactive-form-formbuilder.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    CreateProductComponent,
    ProductListComponent,
    UserListComponent,
    TemplateDrivenExpComponent,
    TemplateDrivenModalComponent,
    EmployeeListComponent,
    ChildEmployeeListComponent,
    ReactiveFormComponent,
    ReactiveFormFormbuilderComponent,
    LifeCycleHooksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
