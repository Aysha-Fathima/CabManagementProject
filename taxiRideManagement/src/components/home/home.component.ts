import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { TaxiRideService } from '../../services/taxi-ride.service';
import { MapsComponent } from "../maps/maps.component";
import { catchError,tap } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FormsModule, NgFor, MapsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // pickupLocations = ['Bangalore Palace', 'Cubbon Park', 'Vidhana Soudha', 'MG Road', 'ISKCON Temple'];
  // dropLocations = ['Bangalore Palace', 'Cubbon Park', 'Bangalore Palace', 'MG Road', 'ISKCON Temple'];
  // // distance = [57,23,89,18,8];
  
  // SourceLocation: string = '';
  // DestinationLocation: string = '';
  // searchCabs() {
  //   // Implement the logic to search for cabs here
  //   console.log('Searching cabs from', this.SourceLocation, 'to', this.DestinationLocation);
  // }
  


  restUserData: TaxiRideService;
  constructor( restUserDataRef:TaxiRideService,private router:Router)
  {
    this.restUserData=restUserDataRef;

  }



  // selectedPickupLocation: any; // Change 'any' to the specific type if possible
  // selectedDropLocation: any; // Change 'any' to the specific type if possible
  



  
  
    pickupLocations = ['Bangalore Palace', 'Cubbon Park', 'Vidhana Soudha', 'MG Road', 'ISKCON Temple'];
    dropLocations = ['Bangalore Palace', 'Cubbon Park', 'Vidhana Soudha', 'MG Road', 'ISKCON Temple'];
  
    SourceLocation: string = '';
    DestinationLocation: string = '';
  
  
    // farecalc() {
    //   this.restUserData.farecalc(this.SourceLocation, this.DestinationLocation)
    //   .subscribe(
    //     (response: any) => {
    //       console.log('Estimated Fare:', response); // Log the entire response
    //       // Assuming the fare value is in response.fare
    //       if (response.fare) {
    //         console.log('Fare Value:', response.fare); // Log only the fare value
    //       } else {
    //         console.error('Fare value not found in the response');
    //       }
    //     },
    //     error => {
    //       console.error('Error fetching fare:', error);
    //     }
    //   );
    // }
    redirecttobookcab(){
      this.router.navigateByUrl("bookcab");
    }
    // farecalc() {
    //   this.restUserData.farecalc(this.SourceLocation, this.DestinationLocation).subscribe(
    //     (fare: number) => {
    //       console.log('Fare Value:', fare); // This should log the numeric fare value
    //     // this.redirecttobookcab();
    //     },
    //     error => {
    //       console.error('Error fetching fare:', error);
    //     }
    //   );
    // }
  
  







}

