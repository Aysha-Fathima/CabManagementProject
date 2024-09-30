import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TaxiRideService } from '../../services/taxi-ride.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule,RouterOutlet,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  // contactData = {
  //   name:'',
  //   email:'',
  //   message:''
  // };

  // onSubmit(){
  //   console.log('Contact Data:',this.contactData);

  //   this.contactData = {name:'',email:'',message:''};

  //   alert('Callback Made');
  // }


  restData:TaxiRideService;


  constructor(restDataref:TaxiRideService) {
    this.restData=restDataref;
  }
}
