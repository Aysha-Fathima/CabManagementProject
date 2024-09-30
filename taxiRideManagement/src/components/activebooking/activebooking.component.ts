import { Component } from '@angular/core';
import { TaxiRideService } from '../../services/taxi-ride.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-activebooking',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './activebooking.component.html',
  styleUrl: './activebooking.component.css'
})
export class ActivebookingComponent {
  restUserData: TaxiRideService;
  constructor(restUserDataRef:TaxiRideService)
  {
    this.restUserData=restUserDataRef;

  }
}
