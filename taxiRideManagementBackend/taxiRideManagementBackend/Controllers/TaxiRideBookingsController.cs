using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using taxiRideManagementBackend.Models;

namespace taxiRideManagementBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[EnableCors(PolicyName = "adminPolicy")]
    public class TaxiRideBookingsController : ControllerBase
    {
        private readonly TaxiRideManagementDbContext _context = new TaxiRideManagementDbContext();

        //public TaxiRideBookingsController(TaxiRideManagementDbContext context)
        //{
        //    _context = context;
        //}

        // GET: api/TaxiRideBookings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TaxiRideBooking>>> GetTaxiRideBookings()
        {
          if (_context.TaxiRideBookings == null)
          {
              return NotFound();
          }
            return await _context.TaxiRideBookings.ToListAsync();
        }

        // GET: api/TaxiRideBookings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<TaxiRideBooking>>> GetTaxiRideBooking(int id)
        {
          if (_context.TaxiRideBookings == null)
          {
              return NotFound();
          }
            var taxiRideBookings = await _context.TaxiRideBookings
                   .Where(booking => booking.CustomerId == id)
                   .ToListAsync();
            if (taxiRideBookings == null)
            {
                return NotFound();
            }

            return taxiRideBookings;
        }

        [HttpGet("booked")]
        public async Task<ActionResult<IEnumerable<TaxiRideBooking>>> GetBookedTaxiRideBookings(int id)
        {
            if (_context.TaxiRideBookings == null)
            {
                return NotFound();
            }

            var bookedTaxiRideBookings = await _context.TaxiRideBookings
                .Where(b => b.Status == "booked" && b.CustomerId==id)
                .ToListAsync();

            if (bookedTaxiRideBookings == null || !bookedTaxiRideBookings.Any())
            {
                return NotFound();
            }

            return bookedTaxiRideBookings.ToList();
        }


        // PUT: api/TaxiRideBookings/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaxiRideBooking(int id, TaxiRideBooking taxiRideBooking)
        {
            if (id != taxiRideBooking.TaxiRideId)
            {
                return BadRequest();
            }

            _context.Entry(taxiRideBooking).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TaxiRideBookingExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TaxiRideBookings
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TaxiRideBooking>> PostTaxiRideBooking(TaxiRideBooking taxiRideBooking)
        {
          if (_context.TaxiRideBookings == null)
          {
              return Problem("Entity set 'TaxiRideManagementDbContext.TaxiRideBookings'  is null.");
          }
            _context.TaxiRideBookings.Add(taxiRideBooking);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTaxiRideBooking", new { id = taxiRideBooking.TaxiRideId }, taxiRideBooking);
        }

        // DELETE: api/TaxiRideBookings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTaxiRideBooking(int id)
        {
            if (_context.TaxiRideBookings == null)
            {
                return NotFound();
            }
            var taxiRideBooking = await _context.TaxiRideBookings.FindAsync(id);
            if (taxiRideBooking == null)
            {
                return NotFound();
            }

            _context.TaxiRideBookings.Remove(taxiRideBooking);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPost("bookTaxi")]
        public async Task<ActionResult<TaxiRideBooking>> PostTaxiRide(TaxiRideBooking taxiRideBooking)
        {
            if (_context.TaxiRideBookings == null)
            {
                return Problem("Entity is null.");
            }


            var idleDriver = await _context.Drivers
                .Where(d => d.DriverStatus == "idle")
                .FirstOrDefaultAsync();
            Console.WriteLine(idleDriver);

            if (idleDriver == null)
            {
                return Problem("No idle drivers available.");
            }

            taxiRideBooking.DriverId = idleDriver.DriverUserId;
            idleDriver.DriverStatus = "ontrip";

            _context.TaxiRideBookings.Add(taxiRideBooking);

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTaxiRideBooking", new { id = taxiRideBooking.TaxiRideId }, taxiRideBooking);
        }

        [HttpGet]
        [Route("lasttaxiid")]
        public IActionResult GetTaxiId() 
        {
            var taxiId = (from t in _context.TaxiRideBookings
                          select t.TaxiRideId).Max();
            return Ok(taxiId);
        }
      




        // POST: api/TaxiRideBookings/getEstimatedFare
        [HttpPost("getEstimatedFare")]
        public async Task<ActionResult<decimal>> GetEstimatedFare([FromBody] TaxiFareRequest request)
        {
            Console.WriteLine($"Received request for fare calculation from {request.SourceLocation} to {request.DestinationLocation}");

            if (_context.TaxiRideBookings == null)
            {
                return Problem("Input is null");
            }

            decimal distanceInKm = GetDistance(request.SourceLocation, request.DestinationLocation);
            decimal fare = CalculateFare(distanceInKm);

            Console.WriteLine($"Calculated fare: {fare}");

            return fare;
        }

        public class TaxiFareRequest
        {

            public string SourceLocation { get; set; }
            public string DestinationLocation { get; set; }
        }

        private decimal GetDistance(string source, string destination)
        {
            string[] locations = { "Bangalore Palace", "Cubbon Park", "Vidhana Soudha", "MG Road", "ISKCON Temple" };

            decimal[,] distanceMatrix =
            {
      { 0, 2, 3, 4, 6 }, // Bangalore Palace
      { 2, 0, 1, 3, 5 }, // Cubbon Park
      { 3, 1, 0, 2, 4 }, // Vidhana Soudha
      { 4, 3, 2, 0, 5 }, // MG Road
      { 6, 5, 4, 5, 0 }  // ISKCON Temple
  };

            int sourceIndex = Array.IndexOf(locations, source);
            int destinationIndex = Array.IndexOf(locations, destination);

            return distanceMatrix[sourceIndex, destinationIndex];

        }

        private decimal CalculateFare(decimal distanceInKm)
        {
            const decimal baseFare = 50; // fare per km for the first 3 km
            const decimal extraFare = 5; // fare per km after 3 km ps. this is customisable 

            if (distanceInKm <= 3)
            {
                return distanceInKm * baseFare;
            }
            else
            {
                decimal fareForFirstThreeKm = 3 * baseFare;
                decimal fareForExtraKm = (distanceInKm - 3) * extraFare;
                return fareForFirstThreeKm + fareForExtraKm;
            }
        }


        //--------------------------------------------
        [HttpGet("userName")]
        public async Task<ActionResult<int>> GetUser(string name)
        {
            if (_context.TaxiRideBookings == null)
            {
                return NotFound();
            }
            //var taxiRideBooking = await _context.TaxiRideBookings.FindAsync(name);
            var taxiRideBooking = await _context.Users
        .FirstOrDefaultAsync(booking => booking.UserName == name);

            if (taxiRideBooking == null)
            {
                return NotFound();
            }

            return taxiRideBooking.UserId;
        }








        private bool TaxiRideBookingExists(int id)
        {
            return (_context.TaxiRideBookings?.Any(e => e.TaxiRideId == id)).GetValueOrDefault();
        }
    }
}
