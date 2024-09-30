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
    public class TaxiLocationsController : ControllerBase
    {
        private readonly TaxiRideManagementDbContext _context = new TaxiRideManagementDbContext();

        //public TaxiLocationsController(TaxiRideManagementDbContext context)
        //{
        //    _context = context;
        //}

        // GET: api/TaxiLocations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TaxiLocation>>> GetTaxiLocations()
        {
          if (_context.TaxiLocations == null)
          {
              return NotFound();
          }
            return await _context.TaxiLocations.ToListAsync();
        }

        // GET: api/TaxiLocations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TaxiLocation>> GetTaxiLocation(int id)
        {
          if (_context.TaxiLocations == null)
          {
              return NotFound();
          }
            var taxiLocation = await _context.TaxiLocations.FindAsync(id);

            if (taxiLocation == null)
            {
                return NotFound();
            }

            return taxiLocation;
        }

        // PUT: api/TaxiLocations/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaxiLocation(int id, TaxiLocation taxiLocation)
        {
            if (id != taxiLocation.LocationId)
            {
                return BadRequest();
            }

            _context.Entry(taxiLocation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TaxiLocationExists(id))
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

        // POST: api/TaxiLocations
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TaxiLocation>> PostTaxiLocation(TaxiLocation taxiLocation)
        {
          if (_context.TaxiLocations == null)
          {
              return Problem("Entity set 'TaxiRideManagementDbContext.TaxiLocations'  is null.");
          }
            _context.TaxiLocations.Add(taxiLocation);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTaxiLocation", new { id = taxiLocation.LocationId }, taxiLocation);
        }

        // DELETE: api/TaxiLocations/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTaxiLocation(int id)
        {
            if (_context.TaxiLocations == null)
            {
                return NotFound();
            }
            var taxiLocation = await _context.TaxiLocations.FindAsync(id);
            if (taxiLocation == null)
            {
                return NotFound();
            }

            _context.TaxiLocations.Remove(taxiLocation);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TaxiLocationExists(int id)
        {
            return (_context.TaxiLocations?.Any(e => e.LocationId == id)).GetValueOrDefault();
        }
    }
}
