import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  // imports: [RouterModule],
  imports: [RouterModule,RouterOutlet,FormsModule,MatButtonModule,MatIconModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {

  constructor(private router:Router){}

  redirecttoadminpage(){
    this.router.navigateByUrl("admin");
  }

  onSubmit(form: any) {
    const { username, password } = form.value;

    if (username === 'admin' && password === 'admin123') {
      // Navigate to the admin page
      this.redirecttoadminpage();
    } else {
      // Handle invalid login
      alert('Invalid username or password');
    }
  }
}
