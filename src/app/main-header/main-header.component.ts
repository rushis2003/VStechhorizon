
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent {
  isDropdownOpen: boolean = false;
  isMenuOpen: boolean = false;

  constructor(private router: Router) {}

  scrollToSection(section: string) {
    this.router.navigate([''], { fragment: section });
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
