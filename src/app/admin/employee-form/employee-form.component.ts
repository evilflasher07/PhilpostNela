import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup, NgForm} from '@angular/forms';
import { EmployeeService } from '../../employee.service';
import {ToastrService} from 'ngx-toastr'


@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  selectedProvince = 0;
  selectedCity = 0;
 
  cities = [];
  zipcodes = [];
 

  constructor(private employeeService: EmployeeService, private toastr: ToastrService) { }

  ngOnInit() {
    
    this.resetForm();
  }

  onSelectProvince(province_id: number) {
    this.selectedProvince = province_id;
    this.selectedCity = 0;
    this.zipcodes = [];
    this.cities = this.getCities().filter((item) => {
      return item.province_id === Number(province_id)
    });
  }
 
  onSelectCity(zipcode_id: number) {
    this.selectedCity = zipcode_id;
    this.zipcodes = this.getZipCode().filter((item) => {
      return item.zipcode_id === Number(zipcode_id)
    });
  }
 
  getProvinces() {
    return [
      { id: 1, name: 'Cagayan' },
      { id: 2, name: 'Isabela' },
      { id: 3, name: 'Nueva Viscaya' }
    ];
  }
 
  getCities() {
    return [
      { id: 1, province_id: 1, name: 'Lasam' },
      { id: 2, province_id: 1, name: 'Tuguegarao' },
      { id: 3, province_id: 2, name: 'Cabagan' },
      { id: 4, province_id: 2, name: 'Ilagan City' },
      { id: 5, province_id: 3, name: 'Bayombong' },
      { id: 6, province_id: 3, name: 'Solano' },
    ]
  }
 
  getZipCode() {
    return [
      { id: 1, zipcode_id: 1, name: '1111' },
      { id: 2, zipcode_id: 2, name: '2222' },
      { id: 3, zipcode_id: 3, name: '3333' },
      { id: 4, zipcode_id: 4, name: '4444' },
      { id: 5, zipcode_id: 5, name: '5555' },
      { id: 6, zipcode_id: 6, name: '6666' },
    ]
  }

  onSubmit(employeeForm: NgForm){
    if(employeeForm.value.$key == null)
      this.employeeService.insertEmployee(employeeForm.value);
    else
      this.employeeService.updateEmployee(employeeForm.value);
    this.resetForm(employeeForm);
    this.toastr.success('Submitted Successfully','Employee Register');
  }

  resetForm(employeeForm?: NgForm){
    if(employeeForm != null)
    employeeForm.reset();
    this.employeeService.selectedEmployee = {
      $key: null,
      fname: '',
      mname: '',
      lname: '',
      position: '',
      address: '',
      isActive: true,
      contactnumber:0,
    }
  }

}
