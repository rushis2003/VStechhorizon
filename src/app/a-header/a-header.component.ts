// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-a-header',
//   templateUrl: './a-header.component.html',
//   styleUrls: ['./a-header.component.scss']
// })
// export class AHeaderComponent {
//   isLoggedIn = false;

//   constructor(private router: Router) { }

//   ngOnInit() {
//     this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
//   }

//   onLogout(): void {
//     localStorage.removeItem('isLoggedIn');
//     localStorage.removeItem('sessionToken');
//     this.router.navigate(['/a-auth-login']);
//   }
//   // onLogout() {
//   //   this.isLoggedIn = false;
//   //   localStorage.setItem('isLoggedIn', 'false');
//   //   this.router.navigate(['/a-auth-login']);
//   // }

// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a-header',
  templateUrl: './a-header.component.html',
  styleUrls: ['./a-header.component.scss']
})
export class AHeaderComponent {
  isLoggedIn = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  onLogout(): void {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('sessionToken');
    this.router.navigate(['/a-auth-login']);
    
  }
  isSidebarOpen = true

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  // onLogout() {
  //   this.isLoggedIn = false;
  //   localStorage.setItem('isLoggedIn', 'false');
  //   this.router.navigate(['/a-auth-login']);
// }

}