using System;
using System.Collections.Generic;

namespace taxiRideManagementBackend.Models;

public partial class TaxiLocation
{
    public int LocationId { get; set; }

    public string? LocationName { get; set; }

    public decimal? Latitude { get; set; }

    public decimal? Longitude { get; set; }
}
