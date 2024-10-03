import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
  projectInfo = {
    title: 'Cab Management System',
    description: 'Our Cab Management System streamlines the process of booking and managing cabs for customers and drivers. We prioritize user experience and efficiency.',
  };

  teamMembers = [
    // { name: 'Aysha Fathima', img: 'assets/team/alice.jpg' },
    { name: 'Aysha Fathima' },
    { name: 'Sanjana Ananthu'},
    { name: 'Simoni Jain' },
    { name: 'Suharsha Kuchipudi' },
    { name: 'Sundeep S'},
    { name: 'Shobhit Jaiswal' },
  ];

  technologies = ['Angular', 'Web API', 'Entity Framework', 'SQL Server'];
}
