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
    public class ContactusController : ControllerBase
    {
        private readonly TaxiRideManagementDbContext _context;

        public ContactusController(TaxiRideManagementDbContext context)
        {
            _context = context;
        }

        // GET: api/Contactus
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Contactu>>> GetContactus()
        {
          if (_context.Contactus == null)
          {
              return NotFound();
          }
            return await _context.Contactus.ToListAsync();
        }

        // GET: api/Contactus/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Contactu>> GetContactu(int id)
        {
          if (_context.Contactus == null)
          {
              return NotFound();
          }
            var contactu = await _context.Contactus.FindAsync(id);

            if (contactu == null)
            {
                return NotFound();
            }

            return contactu;
        }

        // PUT: api/Contactus/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutContactu(int id, Contactu contactu)
        {
            if (id != contactu.ConId)
            {
                return BadRequest();
            }

            _context.Entry(contactu).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContactuExists(id))
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

        // POST: api/Contactus
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Contactu>> PostContactu(Contactu contactu)
        {
          if (_context.Contactus == null)
          {
              return Problem("Entity set 'TaxiRideManagementDbContext.Contactus'  is null.");
          }
            _context.Contactus.Add(contactu);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetContactu", new { id = contactu.ConId }, contactu);
        }

        // DELETE: api/Contactus/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContactu(int id)
        {
            if (_context.Contactus == null)
            {
                return NotFound();
            }
            var contactu = await _context.Contactus.FindAsync(id);
            if (contactu == null)
            {
                return NotFound();
            }

            _context.Contactus.Remove(contactu);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ContactuExists(int id)
        {
            return (_context.Contactus?.Any(e => e.ConId == id)).GetValueOrDefault();
        }
    }
}
