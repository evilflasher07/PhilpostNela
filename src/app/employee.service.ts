import { Injectable } from '@angular/core';
import { Employee } from './models/employee';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database'


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeList: AngularFireList<any>;
  selectedEmployee: Employee;

  
  constructor(private db: AngularFireDatabase) { }

  getData(){
    this.employeeList = this.db.list('employees');
    return this.employeeList;
  }

  insertEmployee(employee: Employee){
    this.employeeList.push({
      fname: employee.fname,
      mname: employee.mname,
      lname: employee.lname,
      position: employee.position,
      address: employee.address,
      contactnumber: employee.contactnumber
    });
  }

  updateEmployee(employee: Employee){
    this.employeeList.update(employee.$key,
      {
        fname: employee.fname,
        mname: employee.mname,
        lname: employee.lname,
        position: employee.position,
        address: employee.address,
        contactnumber: employee.contactnumber
      }
    );
  }

  deleteEmployee($key: string){
    this.employeeList.remove($key);
  }
}
