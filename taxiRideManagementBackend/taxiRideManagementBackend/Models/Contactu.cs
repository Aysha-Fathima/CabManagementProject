using System;
using System.Collections.Generic;

namespace taxiRideManagementBackend.Models;

public partial class Contactu
{
    public int ConId { get; set; }

    public string? Cname { get; set; }

    public string? Email { get; set; }

    public string? Cmessage { get; set; }
}
