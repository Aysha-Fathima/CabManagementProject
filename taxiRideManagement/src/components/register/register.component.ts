import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { TaxiRideService } from '../../services/taxi-ride.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterOutlet,RouterModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  restData:TaxiRideService;


  constructor(restDataref:TaxiRideService,private router:Router) {
    this.restData=restDataref;
  }

  redirecttologin(){
    this.router.navigateByUrl("login");
  }
}
 