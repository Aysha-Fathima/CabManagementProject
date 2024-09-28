import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TaxiRideService } from '../../services/taxi-ride.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterOutlet,RouterModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  // onSubmit() {
  //   // Handle registration logic here
  //   console.log('Registration form submitted');
  //   alert('Registered');
  // }

  restData:TaxiRideService;


  constructor(restDataref:TaxiRideService) {
    this.restData=restDataref;
  }
}
