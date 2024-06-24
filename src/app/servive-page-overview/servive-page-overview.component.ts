import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servive-page-overview',
  templateUrl: './servive-page-overview.component.html',
  styleUrls: ['./servive-page-overview.component.scss']
})
export class ServivePageOverviewComponent {
  constructor(private router: Router) {}
  call_services() {
    this.router.navigate(['service-page-detailed']);
  }

}

