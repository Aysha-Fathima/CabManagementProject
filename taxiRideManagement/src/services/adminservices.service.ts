import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminservicesService {

  usersdata:any;
  addData:any;
  UpdateData:any;
  delData:any;
  contactdata:any;

_https:HttpClient;

constructor(_httpRef:HttpClient){
  this._https=_httpRef;
}

httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

getAllDriverDetails()
{
  this._https.get("https://localhost:7068/api/Drivers")
  .subscribe((data=>{
    this.usersdata=data;
  }))
}

addDriverFromFORM(data:any){
  // let newData = JSON.stringify(data.value);
  
  this._https.post("https://localhost:7068/api/Drivers",data.value) // where and what data
  .subscribe(response=>{
    console.log("data added:", response)
    alert("added")
  });
}

updateDriverDetails(data:any)
{
console.log(data.value);
  // var test = {
  //   "driverUserId": 7,
  //   "driverName": "Shobhit",
  //   "driverPhoneNumber": 9900,
  //   "driverVehicleNumber": "jfjkdjf"
  //  };
this._https.put('https://localhost:7068/api/Drivers/' + data.value.driverUserId,JSON.stringify(data.value),this.httpOptions)
.subscribe(result =>{
  console.log(result)
})

}

delDetails(delInfo:any)
  {
    let data = JSON.stringify(delInfo.value.driverUserId);
    console.log(data);
    this._https.delete("https://localhost:7068/api/Drivers/"+data,this.httpOptions)
    .subscribe(response => {
      console.log('deleted',response);
      alert("deleted");
    })
  }




  getAllContactDetails()
{
  this._https.get("https://localhost:7068/api/Contactus")
  .subscribe((data=>{
    this.contactdata=data;
  }))
}

  




}