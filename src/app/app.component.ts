import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  model: any = {};

  onSubmit(){
    alert('SUCCESS!!'+ JSON.stringify(this.model))
  }
}
