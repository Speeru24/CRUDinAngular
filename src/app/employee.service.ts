import { Employee } from "./employee.model";
import { Input, Injectable } from "../../node_modules/@angular/core";

// @Injectable()
export class EmployeeService{
    employeeDetails:Employee;
    EmployeeList:Employee[] = [
        new Employee(1,'Shishir Peeru','shishir@gmail.com',26),
        new Employee(2,'Tushar Fulmali','tushar@gmail.com',28),
      ];

    onEditData(employee:Employee){
        this.employeeDetails = new Employee(employee.id, employee.name,employee.email,employee.age);
        //this.employeeDetails = employee;
        //console.log(employee.id + " " + employee.name + " " + employee.email + " " + employee.age + " in service");
    }

    onSaveData(employee:Employee){
        debugger;
        if(employee.id == 0 || employee.id == null) {
            employee.id = this.EmployeeList.length + 1;
            this.employeeDetails = new Employee(employee.id,employee.name, employee.email,employee.age);
            this.EmployeeList.push(this.employeeDetails);
        }
        else{
            this.EmployeeList.find(x=>x.id == employee.id).name = employee.name;
            this.EmployeeList.find(x=>x.id == employee.id).email = employee.email;
            this.EmployeeList.find(x=>x.id == employee.id).age = employee.age;
        }
    }

    onDelete(id:number){
        debugger;
        if(id > 0 ){
            this.employeeDetails = this.EmployeeList.filter(x=>x.id == id)[0];
            var index = this.EmployeeList.indexOf(this.employeeDetails);
            this.EmployeeList.splice(index,1);
            this.employeeDetails = new Employee(null,null,null,null);
        }
    }

    

}