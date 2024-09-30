import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TaxiRideService } from '../../services/taxi-ride.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,RouterModule,FormsModule,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  pickupLocations = ['Bellandur', 'WhiteField', 'Kormangla', 'HSR Layout', 'Marathahalli'];
  dropLocations = ['Bellandur', 'WhiteField', 'Kormangla', 'HSR Layout', 'Marathahalli'];
  distance = [57,23,89,18,8];
  
  selectedPickupLocation: string = '';
  selectedDropLocation: string = '';
  searchCabs() {
    // Implement the logic to search for cabs here
    console.log('Searching cabs from', this.selectedPickupLocation, 'to', this.selectedDropLocation);
  }


  restUserData: TaxiRideService;
  constructor(restUserDataRef:TaxiRideService)
  {
    this.restUserData=restUserDataRef;

  }

}

