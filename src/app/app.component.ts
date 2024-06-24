import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vsWeb';
  constructor() {
    // Clear the form data on page load/reload
    localStorage.removeItem('scholarshipFormData');
}
}

