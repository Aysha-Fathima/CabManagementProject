using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using taxiRideManagementBackend.Models;

namespace taxiRideManagementBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
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
        public async Task<ActionResult<TaxiRideBooking>> GetTaxiRideBooking(int id)
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

            return taxiRideBooking;
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

        private bool TaxiRideBookingExists(int id)
        {
            return (_context.TaxiRideBookings?.Any(e => e.TaxiRideId == id)).GetValueOrDefault();
        }
    }
}
