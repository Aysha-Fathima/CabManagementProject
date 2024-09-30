import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapsService {
  userdata:any;
  _http:HttpClient;

  getUserDetails()
  {
    this._http.get("https://localhost:7068/api/TaxiLocations")
    .subscribe((data)=>{
      this.userdata=data;
    })
  }

  constructor(_httpRef:HttpClient) {
    this._http=_httpRef
   }
}
