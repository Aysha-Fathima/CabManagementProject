import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { TaxiRideService } from '../../services/taxi-ride.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,RouterOutlet,FormsModule,MatButtonModule,MatIconModule],
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


  constructor(restDataref:TaxiRideService,private router:Router) {
    this.restData=restDataref;
  }

  redirecttohome(){
    this.router.navigateByUrl("home");
  }
}
