import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-postoffice-form',
  templateUrl: './postoffice-form.component.html',
  styleUrls: ['./postoffice-form.component.css']
})
export class PostofficeFormComponent implements OnInit {

  model: any = {};
  cities = {};
  zipcodes;

  provinces = [{
    id: 1, name: 'Cagayan', cities: ['Abulug', 'Lallo', 'Ballesteros'], zipcodes:[1234,2345,3221]
  },
  {
    id: 2, name: 'Isabela', cities: ['Tumauini', 'Santiago City', 'Ilagan City'], zipcodes:[1224,1345,3241]
  },
  {
    id: 3, name: 'Nueva Viscaya', cities: ['Solano', 'Bambang', 'Sta. Fe'],zipcodes:[1235,5345,5221]
  },
  ];

  constructor(
   ) {}
  
   onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }
  ngOnInit() {
    this.cities = this.provinces.filter(x => x.id == 1)[0].cities;
  }

  onChange(deviceValue) {
    this.cities = this.provinces.filter(x => x.id == deviceValue)[0].cities;
  }

  zipCodeMap(Value){
    this.zipcodes = this.provinces.filter(x => x.id == Value)[0].zipcodes;
  }

}
