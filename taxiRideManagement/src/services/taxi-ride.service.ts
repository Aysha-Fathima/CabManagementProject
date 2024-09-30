import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaxiRideService {

  postdata:any; //variable to hold the data
  adddata:any;
  
  _http:HttpClient;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

  // private apiUrl = 'https://localhost:7068/api/Users';

  //Login
  loginDetails(loginInfo:any)
  {
    // console.log(loginInfo.value.userRole);
   return this._http.post("https://localhost:7068/api/Users/Login",loginInfo.value,this.httpOptions).pipe(
      tap(response => {
        // Handle success response
        console.log("Success", response);
        alert("Login Successful");
        //this.router.navigate(['/home']);
        // this.router.navigate(['/your-target-component']); // Replace with your target route
      }),
      catchError(error => {
        // Handle error response
        console.error("Error", error);
        alert(error.error || "Login failed. Please try again.");
        return throwError(() => new Error('test')); // Rethrow the error for further handling if needed
      })
    ).subscribe(); // Subscribe at the end to trigger the request
  }
  

  //Register
  registerDetails(registerInfo:any)
  {
    registerInfo.value.userRole = "Customer";
    console.log(registerInfo.value);
   return this._http.post("https://localhost:7068/api/Users/Register",registerInfo.value,this.httpOptions).pipe(
      tap(response => {
        // Handle success response
        console.log("Success", response);
        alert("Registration Successful");
        // this.router.navigate(['/your-target-component']); // Replace with your target route
      }),
      catchError(error => {
        // Handle error response
        console.error("Error", error);
        alert(error.error || "Register failed. Please try again.");
        return throwError(() => new Error('test')); // Rethrow the error for further handling if needed
      })
    ).subscribe(); // Subscribe at the end to trigger the request
  }

   //ContactUs
   contactDetails(loginInfo:any)
   {
     // console.log(loginInfo.value.userRole);
    return this._http.post("https://localhost:7068/api/Contactus",loginInfo.value,this.httpOptions).pipe(
       tap(response => {
         // Handle success response
         console.log("Success", response);
         alert("Query submitted");
         // this.router.navigate(['/your-target-component']); // Replace with your target route
       }),
       catchError(error => {
         // Handle error response
         console.error("Error", error);
         alert(error.error || "Sorrryyyyy, try again :(");
         return throwError(() => new Error('test')); // Rethrow the error for further handling if needed
       })
     ).subscribe(); // Subscribe at the end to trigger the request
   }





   //User


  //  getUsers

//   getAllActiveBookingDetails()
//  {
//    this._http.get("https://localhost:7068/api/TaxiRideBookings")
//    .subscribe((data=>{
//      this.activebooking=data;
//    }))
//  }


   activebooking:any;

   getAllActiveBookingDetails()
 {
   this._http.get("https://localhost:7068/api/TaxiRideBookings")
   .subscribe((data=>{
     this.activebooking=data;
   }))
 }
 
 searchData:any;
 
 searchActiveBookingByStatus(){
   this._http.get("https://localhost:7068/api/TaxiRideBookings/booked")
   .subscribe((data=>{
     this.searchData=data;
   }))
   
 }

    constructor(_httpRef:HttpClient) {
      this._http=_httpRef;
      
     }
    
}
