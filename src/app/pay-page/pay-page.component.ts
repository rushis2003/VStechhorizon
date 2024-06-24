import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pay-page',
  templateUrl: './pay-page.component.html',
  styleUrls: ['./pay-page.component.scss']
})
export class PayPageComponent implements OnInit {
  termsAccepted: boolean = false;
  constructor(private router:Router, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['accepted']) {
        this.termsAccepted = params['accepted'] === 'true';
      }
    });
  }

  handleTermsClick(event: Event) {
    if (!this.termsAccepted) {
      event.preventDefault();
      this.openTerms();
    }
  }

  openTerms() {
    this.router.navigate(['/term-condition']);
}


}