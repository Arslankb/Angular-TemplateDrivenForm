import { Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForm';

  //Drop Down
  defaultCountry = 'pakistan';

  //Data Show in webpage to create properties
  firstname:string = '';
  lastname:string = '';
  email:string = '';
  country:string = '';
  gen:string = '';

  //Radio Button
  gender = [
    {id: 1, value: 'Male'},
    {id: 2, value: 'Female'},
    {id: 3, value: 'Other'},
  ]
  @ViewChild('myForm') form!: NgForm;

  onSubmit(){
    console.log(this.form)

    this.firstname = this.form.value.firstname;
    this.lastname = this.form.value.lastname;
    this.email = this.form.value.email;
    this.country = this.form.value.country;
    this.gen = this.form.value.gender;

    this.form.reset();
  }
}
