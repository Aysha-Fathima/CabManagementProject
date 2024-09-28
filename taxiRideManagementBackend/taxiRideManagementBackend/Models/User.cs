using System;
using System.Collections.Generic;

namespace taxiRideManagementBackend.Models;

public partial class User
{
    public int UserId { get; set; }

    public string? UserName { get; set; }

    public long? PhoneNum { get; set; }

    public string? UserEmailId { get; set; }

    public string? UserPassword { get; set; }

    public string? UserRole { get; set; }

    public virtual ICollection<TaxiRideBooking> TaxiRideBookings { get; set; } = new List<TaxiRideBooking>();
}
