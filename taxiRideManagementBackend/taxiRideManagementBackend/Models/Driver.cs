using System;
using System.Collections.Generic;

namespace taxiRideManagementBackend.Models;

public partial class Driver
{
    public int DriverUserId { get; set; }

    public string? DriverName { get; set; }

    public long? DriverPhoneNumber { get; set; }

    public string? DriverVehicleNumber { get; set; }

    public string? DriverStatus { get; set; }

    public virtual ICollection<TaxiRideBooking> TaxiRideBookings { get; set; } = new List<TaxiRideBooking>();
}
