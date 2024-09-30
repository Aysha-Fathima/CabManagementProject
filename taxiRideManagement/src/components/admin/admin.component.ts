import { Component } from '@angular/core';
import { AdminservicesService } from '../../services/adminservices.service';
import { FormsModule, NgForm } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  restUserData:AdminservicesService;


  constructor(restDataref:AdminservicesService) {
    this.restUserData=restDataref;
  }

}
