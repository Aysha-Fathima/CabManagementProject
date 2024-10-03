import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

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

  redirecttohome(){
    this.router.navigateByUrl("home");
  }
  customerId:any;
  loginDetails(loginInfo:any)
  {

    console.log(loginInfo.value);

    this._http.get("https://localhost:7068/api/TaxiRideBookings/userName?name=" + loginInfo.value.userName)
    .subscribe((data=>{
      this.customerId=data;
      console.log(this.customerId)
    }))
    
    
    
    // console.log(loginInfo.value.userRole);
   return this._http.post("https://localhost:7068/api/Users/Login",loginInfo.value,this.httpOptions).pipe(
      tap(response => {
        // Handle success response
        console.log("Success", response);
        // alert("Login Successful");
        this.redirecttohome();
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
  redirecttologin(){
    this.router.navigateByUrl("login");
  }
  registerDetails(registerInfo:any)
  {
    registerInfo.value.userRole = "Customer";
    console.log(registerInfo.value);
   return this._http.post("https://localhost:7068/api/Users/Register",registerInfo.value,this.httpOptions).pipe(
      tap(response => {
        // Handle success response
        console.log("Success", response);
        alert("Registration Successful");
        this.redirecttologin();
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


  //  contactDetails(loginInfo:any){
  //   this._http.post("https://localhost:7068/api/Contactus",loginInfo.value)
  //   .subscribe((data=>{
  //     this.searchData=data;
  //     console.log(this.searchData);
  //     alert('')
  //   }))
  //  }

  //  data:any;
  //   farecalc(selectedPickupLocation:any,selectedDropLocation:any)
  //   {
  //     let fareRequest = {
  //       pickupLocation: selectedPickupLocation,
  //       dropLocation: selectedDropLocation
  //     };



  //     console.log(fareRequest);
  //     //console.log('Fare Request:', JSON.stringify(fareRequest));
  //     JSON.stringify(fareRequest, null, 2);

  
  //     // let data = JSON.stringify(calcInfo.value);
  //     // console.log(data);
  //     this._http.post("https://localhost:7068/api/TaxiRideBookings/getEstimatedFare",fareRequest,this.httpOptions)
  //     .subscribe(response => {
  //       console.log('Data added',response);
  //       //alert("Data added");
  //     })
  //   }
  
    
  
   



  
  

  

  // farecalc(selectedPickupLocation: string, selectedDropLocation: string) {
  //   const fareRequest = {
  //     pickupLocation: selectedPickupLocation,
  //     dropLocation: selectedDropLocation
  //   };

  //   console.log('Fare Request:', JSON.stringify(fareRequest));

  //   return this._http.post("https://localhost:7068/api/TaxiRideBookings/getEstimatedFare", fareRequest, this.httpOptions)
  //     .pipe(
  //       tap(response => {
  //         console.log('Estimated Fare Response:', response);
  //       }),
  //       catchError(error => {
  //         console.error('Error:', error);
  //         alert("Failed to fetch estimated fare.");
  //         return throwError(() => new Error(error));
  //       })
  //     );
  // }

farevar:any;
redirecttobookcab(){
  this.router.navigateByUrl("bookcab");
}

  // farecalc(selectedPickupLocation: string, selectedDropLocation: string): Observable<number> {
  //    const fareRequest = {
  //     SourceLocation: selectedPickupLocation,
  //     DestinationLocation: selectedDropLocation
  //   };
  
  //   console.log('Fare Request:', JSON.stringify(fareRequest)); // Log the request for debugging
  // //   this.farevar = {
  // //     SourceLocation: selectedPickupLocation,
  // //     DestinationLocation: selectedDropLocation,
  // //     fare : 340
      

  // //  }

  // //  this.redirecttobookcab();

   
  //   var result = this._http.post<number>("https://localhost:7068/api/TaxiRideBookings/getEstimatedFare", fareRequest, this.httpOptions)
  //   console.log(result);
  //   return result;
  // }




  /////////
  // fareData: Array<{ source: string, destination: string, fare: any }> = [];
  fareData: { source: string, destination: string, fare: any } | null = null;
  farecalc(selectedPickupLocation: string, selectedDropLocation: string){
    // let newData = JSON.stringify(data.value);

    const fareRequest = {
          SourceLocation: selectedPickupLocation,
           DestinationLocation: selectedDropLocation
         };
    
    this._http.post("https://localhost:7068/api/TaxiRideBookings/getEstimatedFare",fareRequest,this.httpOptions) // where and what data
    .subscribe(response=>{
      console.log("data added:", response)
      // alert("added")
      this.fareData = {
        source: selectedPickupLocation,
        destination: selectedDropLocation,
        fare: response
      };
      this.redirecttobookcab();
    }, error => {
      console.error("Error fetching fare:", error);
    });


    

    
  
    
  }
  // finalData: { source: string, destination: string, fare: any, customerId: number, status:string } | null = null;
  // getTaxiDetails:any;

  currentBooking: { source: string, destination: string, fare:number, status:string , customerId:number} | null = null;
  getTaxiDetails: any;

  addBookingTaxi(){
    // if (!this.currentBooking) {
    //   console.log("No current booking available.");
    //   return;
    // }
    // let newData = JSON.stringify(data.value);
    const alldata = {
      pickUpLocation: this.fareData?.source,
      dropLocation: this.fareData?.destination,
       price: this.fareData?.fare,
       customerId: this.customerId,
       status: "booked"
     };

     console.log(alldata);
    
    this._http.post("https://localhost:7068/api/TaxiRideBookings/bookTaxi",JSON.stringify(alldata),this.httpOptions) // where and what data
    .subscribe(response=>{
      console.log("data added:", response);
      
      // alert("added")
    //   this.currentBooking = {
    //     source:  this.fareData?.source,

    //     destinationn: this.fareData?.destination,
    //     fare: response
    //   };
      
    // }, error => {
    //   console.error("Error fetching fare:", error);
    });
  

    this._http.get("https://localhost:7068/api/TaxiRideBookings/lasttaxiid")
          .subscribe(data => {
            this.getTaxiDetails = data;
            console.log("Last taxi details:", this.getTaxiDetails);
          });
  }

//   getAllDriverDetails()
// {
//   this._http.get("https://localhost:7068/api/TaxiRideBookings/lasttaxiid")
//   .subscribe((data=>{
//     this.getTaxiDetails=data;
//   }))
// }
  


  
   





   //User


  //  getUsers

//   getAllActiveBookingDetails()
//  {
//    this._http.get("https://localhost:7068/api/TaxiRideBookings")
//    .subscribe((data=>{
//      this.activebooking=data;
//    }))
//  }


//    


activebooking:any;

   getAllActiveBookingDetails()
 {
   this._http.get("https://localhost:7068/api/TaxiRideBookings/"+this.customerId)
   .subscribe((data=>{
     this.activebooking=data;
   }))
 }
 
 searchData:any;
 
 searchActiveBookingByStatus(){
   this._http.get("https://localhost:7068/api/TaxiRideBookings/booked?id="+this.customerId)
   .subscribe((data=>{
     this.searchData=data;
   }))
  }







    constructor(_httpRef:HttpClient, private router:Router) {
      this._http=_httpRef;
      
     }
    
}
