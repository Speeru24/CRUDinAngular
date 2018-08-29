import { Component, OnInit, Output } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[]
})
export class ListComponent implements OnInit {

  empList:Employee[];
  constructor(private employeeService:EmployeeService) { 
     this.empList = this.employeeService.EmployeeList;
  }
  //empDetails:Employee;
  ngOnInit() {
  }
  
  onEdit(emp:Employee){
    console.log(emp.id + " " + emp.name + " " + emp.email + " " + emp.age);
    this.employeeService.onEditData(emp);
    //this.employeeService.employeeDetails.emit(emp);
  }
   
  onDelete(id:number){
    debugger;
    this.employeeService.onDelete(id);
  }
}
