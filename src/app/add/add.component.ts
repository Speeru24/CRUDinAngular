import { Component, OnInit, DoCheck } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit, DoCheck {

  empData:Employee = new Employee(null,null,null,null);
  constructor(private employeeService:EmployeeService) {
    
   }

  ngOnInit() {
    
  }

  ngDoCheck(){
    if(this.employeeService.employeeDetails){
      
      console.log(this.employeeService.employeeDetails.id + " in add");
      this.empData = this.employeeService.employeeDetails;
      //console.log(this.empData.id + " " + this.empData.name + " " + this.empData.email + " " + this.empData.age + " in add");
      }
  }

  onSave(empl:Employee){
    debugger;
    //this.empData = new Employee(empl.id,empl.name,empl.email,empl.age);
    this.employeeService.onSaveData(empl);
    this.employeeService.employeeDetails = new Employee(null,null,null,null);
  }

  onDelete(id:number){
    //this.employeeService.
  }

  isValid(empl:Employee){
    
  }
}
