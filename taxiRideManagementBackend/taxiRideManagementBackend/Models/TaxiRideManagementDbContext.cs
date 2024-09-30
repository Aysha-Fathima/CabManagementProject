using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace taxiRideManagementBackend.Models;

public partial class TaxiRideManagementDbContext : DbContext
{
    public TaxiRideManagementDbContext()
    {
    }

    public TaxiRideManagementDbContext(DbContextOptions<TaxiRideManagementDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Contactu> Contactus { get; set; }

    public virtual DbSet<Driver> Drivers { get; set; }

    public virtual DbSet<TaxiLocation> TaxiLocations { get; set; }

    public virtual DbSet<TaxiRideBooking> TaxiRideBookings { get; set; }

    public virtual DbSet<TaxiServicebleLocation> TaxiServicebleLocations { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("server=550FEA1D28E459A;database=taxiRideManagementDB;integrated security=true;TrustServerCertificate=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Contactu>(entity =>
        {
            entity.HasKey(e => e.ConId).HasName("PK__contactu__908C8FCBE7B03812");

            entity.ToTable("contactus");

            entity.Property(e => e.ConId).HasColumnName("conId");
            entity.Property(e => e.Cmessage)
                .HasMaxLength(300)
                .IsUnicode(false)
                .HasColumnName("cmessage");
            entity.Property(e => e.Cname)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("cname");
            entity.Property(e => e.Email)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("email");
        });

        modelBuilder.Entity<Driver>(entity =>
        {
            entity.HasKey(e => e.DriverUserId).HasName("PK__drivers__42B680328247288C");

            entity.ToTable("drivers");

            entity.Property(e => e.DriverUserId).HasColumnName("driverUserId");
            entity.Property(e => e.DriverName)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("driverName");
            entity.Property(e => e.DriverPhoneNumber).HasColumnName("driverPhoneNumber");
            entity.Property(e => e.DriverStatus)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("driverStatus");
            entity.Property(e => e.DriverVehicleNumber)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("driverVehicleNumber");
        });

        modelBuilder.Entity<TaxiLocation>(entity =>
        {
            entity.HasKey(e => e.LocationId).HasName("PK__taxiLoca__30646B6EE66826F8");

            entity.ToTable("taxiLocations");

            entity.Property(e => e.LocationId).HasColumnName("locationId");
            entity.Property(e => e.Latitude)
                .HasColumnType("decimal(9, 6)")
                .HasColumnName("latitude");
            entity.Property(e => e.LocationName)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("locationName");
            entity.Property(e => e.Longitude)
                .HasColumnType("decimal(9, 6)")
                .HasColumnName("longitude");
        });

        modelBuilder.Entity<TaxiRideBooking>(entity =>
        {
            entity.HasKey(e => e.TaxiRideId).HasName("PK__taxiRide__4F40852F74B1768C");

            entity.ToTable("taxiRideBooking");

            entity.Property(e => e.TaxiRideId).HasColumnName("taxiRideId");
            entity.Property(e => e.CustomerId).HasColumnName("customerId");
            entity.Property(e => e.DriverId).HasColumnName("driverId");
            entity.Property(e => e.DropLocation)
                .IsUnicode(false)
                .HasColumnName("dropLocation");
            entity.Property(e => e.Fare)
                .HasColumnType("decimal(18, 0)")
                .HasColumnName("fare");
            entity.Property(e => e.PickUpLocation)
                .IsUnicode(false)
                .HasColumnName("pickUpLocation");
            entity.Property(e => e.Status)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("status");

            entity.HasOne(d => d.Customer).WithMany(p => p.TaxiRideBookings)
                .HasForeignKey(d => d.CustomerId)
                .HasConstraintName("FK__taxiRideB__custo__46E78A0C");

            entity.HasOne(d => d.Driver).WithMany(p => p.TaxiRideBookings)
                .HasForeignKey(d => d.DriverId)
                .HasConstraintName("FK__taxiRideB__drive__47DBAE45");
        });

        modelBuilder.Entity<TaxiServicebleLocation>(entity =>
        {
            entity.HasKey(e => e.LocationId).HasName("PK__taxiServ__30646B6E3AF2EA25");

            entity.ToTable("taxiServicebleLocations");

            entity.Property(e => e.LocationId).HasColumnName("locationId");
            entity.Property(e => e.Latitude)
                .HasColumnType("decimal(9, 6)")
                .HasColumnName("latitude");
            entity.Property(e => e.Location)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("location");
            entity.Property(e => e.Longitude)
                .HasColumnType("decimal(9, 6)")
                .HasColumnName("longitude");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PK__users__CB9A1CFFD480DDB8");

            entity.ToTable("users");

            entity.Property(e => e.UserId).HasColumnName("userId");
            entity.Property(e => e.PhoneNum).HasColumnName("phoneNum");
            entity.Property(e => e.UserEmailId)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("userEmailId");
            entity.Property(e => e.UserName)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("userName");
            entity.Property(e => e.UserPassword)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("userPassword");
            entity.Property(e => e.UserRole)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("userRole");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
