import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.scss']
})
export class TermsConditionComponent {
  accepted: boolean = false;
  showPopup: boolean = false;
  showCheckbox: boolean = false;

  constructor(private router: Router) { }

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  acceptTermsInPopup() {
    this.accepted = true;
    this.showCheckbox = true;
    this.closePopup();
  }

  navigateToPayment() {
    if (this.accepted) {
      this.router.navigate(['/payment'], { queryParams: { accepted: true } });
    }
  }


}