using System;
using System.Collections.Generic;

namespace taxiRideManagementBackend.Models;

public partial class TaxiRideBooking
{
    public int TaxiRideId { get; set; }

    public int? CustomerId { get; set; }

    public int? DriverId { get; set; }

    public string? PickUpLocation { get; set; }

    public string? DropLocation { get; set; }

    public decimal? Fare { get; set; }

    public string? Status { get; set; }

    public virtual User? Customer { get; set; }

    public virtual Driver? Driver { get; set; }
}
