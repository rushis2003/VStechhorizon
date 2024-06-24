import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a-auth-login',
  templateUrl: './a-auth-login.component.html',
  styleUrls: ['./a-auth-login.component.scss']
})
export class AAuthLoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) { }

  onLogin() {
    if (this.email === 'vstechhorizon@gmail.com' && this.password === '1') {
      const sessionToken = new Date().getTime().toString(); // Using timestamp as a session token
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('sessionToken', sessionToken); //authentication logic
      this.router.navigate(['/admin-dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }

}
