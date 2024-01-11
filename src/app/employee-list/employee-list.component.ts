import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {


  employeeList:any=[
    {EmployeeName:"Mark",Designation:"Angular Developer",salary:30000},
    {EmployeeName:"john",Designation:"Java Developer",salary:40000},
    {EmployeeName:"Rock",Designation:"Angular Developer",salary:30000},
    {EmployeeName:"Sam",Designation:"Angular Developer",salary:30000},
    {EmployeeName:"Rocky",Designation:"Java Developer",salary:45000},
    {EmployeeName:"Jack",Designation:"Angular Developer",salary:36000},
    {EmployeeName:"Mick",Designation:"Java Developer",salary:30000},
    {EmployeeName:"Charle",Designation:"Java Developer",salary:32000},
    {EmployeeName:"Dom",Designation:"Angular Developer",salary:30000},
    {EmployeeName:"Nick",Designation:"Java Developer",salary:30000}
  ]
  filteredList:any = this.employeeList

  filterEmployees(value: string) {
    // this.filteredList = this.employeeList.filter((obj: { Designation: string; }) => {
    //   return obj.Designation === value;
    // });

    this.filteredList =[]
    this.employeeList.forEach((element: { Designation: string; }) => {
      if(element?.Designation == value){
      this.filteredList.push(element);
      }
    });
 }
}
