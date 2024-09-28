create database taxiRideManagementDB;

use taxiRideManagementDB;


create table users (
userId int identity(1,1) primary key, 
userName varchar(20), 
phoneNum bigint, 
userEmailId varchar(30),
userPassword varchar(20), 
userRole varchar(10), 
constraint chk_userRole check (userRole in ('Admin', 'Customer'))
);

create table drivers(
driverUserId int identity(1,1) primary key, 
driverName varchar(20),
driverPhoneNumber bigint,
driverVehicleNumber varchar(20)
);


create table taxiRideBooking (
taxiRideId int identity(1,1) primary key, 
customerId int, 
driverId int, 
pickUpLocation varchar(max),
dropLocation varchar(max), 
fare decimal, 
status varchar(30),
foreign key (customerId) references users(userId),
foreign key (driverId) references drivers(driverUserId),
constraint chck_status check (status in ('booked', 'cancel', 'delayed', 'completed'))
);



--Scaffold-DbContext "server=550FEA1D28E459A;database=taxiRideManagementDB;integrated security=true;TrustServerCertificate=true" -Provider Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models