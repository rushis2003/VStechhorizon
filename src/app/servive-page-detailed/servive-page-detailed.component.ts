import { Component } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';
 import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-servive-page-detailed',
  templateUrl: './servive-page-detailed.component.html',
  styleUrls: ['./servive-page-detailed.component.scss']
})
export class ServivePageDetailedComponent {

  constructor(private router: Router) {}
  ngAfterViewInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const fragment = this.router.url.split('#')[1];
      if (fragment) {
        this.scrollToserviceSection(fragment);
      }
    });
  }
  
  scrollToserviceSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

}
