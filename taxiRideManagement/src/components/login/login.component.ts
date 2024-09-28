import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TaxiRideService } from '../../services/taxi-ride.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,RouterOutlet,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // onSubmit() {
  //   // Handle login logic here
  //   console.log('Form submitted');
  //   alert('Submitted')
  // }

  restData:TaxiRideService;


  constructor(restDataref:TaxiRideService) {
    this.restData=restDataref;
  }
}
