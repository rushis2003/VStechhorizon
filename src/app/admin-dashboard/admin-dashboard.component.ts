// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-admin-dashboard',
//   templateUrl: './admin-dashboard.component.html',
//   styleUrls: ['./admin-dashboard.component.scss']
// })
// export class AdminDashboardComponent {

// }


// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';


// @Component({
//   selector: 'app-admin-dashboard',
//   templateUrl: './admin-dashboard.component.html',
//   styleUrls: ['./admin-dashboard.component.scss']
// })
// export class AdminDashboardComponent implements OnInit {
//   buyKitCount: number = 0;
//   subscribersCount: number = 0;
//   contactUsCount: number = 0;
//   scholarshipCount: number = 0;
//   private baseUrl = 'http://localhost:3006';
//   constructor(private http: HttpClient) {}

//   ngOnInit() {
//     this.fetchCounts();
//   }

//   fetchCounts() {
//     alert("inside feach")
//     this.http.get<{buyKitCount: number, subscribersCount: number, contactUsCount: number, scholarshipCount: number}>(`${this.baseUrl}/counts`)
//       .subscribe(data => {
//         this.buyKitCount = data.buyKitCount;
//         this.subscribersCount = data.subscribersCount;
//         this.contactUsCount = data.contactUsCount;
//         this.scholarshipCount = data.scholarshipCount;
//       }, error => {
//         console.error('Error fetching counts:', error);
//       });
//   }
// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {




}
