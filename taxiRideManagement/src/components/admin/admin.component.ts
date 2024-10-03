import { Component } from '@angular/core';
import { AdminservicesService } from '../../services/adminservices.service';
import { FormsModule, NgForm } from '@angular/forms';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule,NgFor,MatCardModule,MatToolbarModule,
  MatTableModule,MatFormFieldModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  restUserData:AdminservicesService;


  constructor(restDataref:AdminservicesService) {
    this.restUserData=restDataref;
  }

}
