using System;
using System.Collections.Generic;

namespace taxiRideManagementBackend.Models;

public partial class TaxiServicebleLocation
{
    public int LocationId { get; set; }

    public string? Location { get; set; }

    public decimal? Latitude { get; set; }

    public decimal? Longitude { get; set; }
}
