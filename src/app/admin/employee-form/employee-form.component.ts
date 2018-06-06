import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employeeForm: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  public createForm(){
    this.employeeForm = this.fb.group({
      category: ['']
    })
  }

  showData(){
    console.log(this.employeeForm.value);
  }

}
