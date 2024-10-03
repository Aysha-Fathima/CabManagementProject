import { Component } from '@angular/core';
import { MapsService } from '../../services/maps.service';

@Component({
  selector: 'app-maps',
  standalone: true,
  imports: [],
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.css'
})
export class MapsComponent {
  restUserData: MapsService;
  constructor(restUserDataRef:MapsService)
  {
    this.restUserData=restUserDataRef;

  }
}
