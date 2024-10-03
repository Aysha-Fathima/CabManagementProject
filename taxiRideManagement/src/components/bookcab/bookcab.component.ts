import { Component } from '@angular/core';
import { TaxiRideService } from '../../services/taxi-ride.service';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookcab',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './bookcab.component.html',
  styleUrl: './bookcab.component.css'
})
export class BookcabComponent {
  restUserData: TaxiRideService;
  constructor( restUserDataRef:TaxiRideService,private router:Router)
  {
    this.restUserData=restUserDataRef;

  }
  redirecttohome(){
    this.router.navigateByUrl("home");
  }



}
