import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './scholarship-page.component.html',
  styleUrls: ['./scholarship-page.component.css']
})
export class ScholarshipPageComponent implements OnInit { 
   // title = 'scholarshipPage'; 
  // ar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // scholarship_div_visibility_value = 0;
  // // obj:AppComponent = new AppComponent();
  
  
  // current_scholarship_div_visibility_fun(){
  //   this.scholarship_div_visibility_value=0;
  // }

  // upcoming_scholarship_div_visibility_fun(){
  //   this.scholarship_div_visibility_value=1;
  // } 
  
  showPopup = false;
  isPopDisabled = true;

  ngOnInit() {
    this.showPopupBox();
  }

  showPopupBox() {
    this.isPopDisabled = true; 
    this.showPopup = true;
    setTimeout(() => {
      const popupElement = document.querySelector('.popup');
      if (popupElement) {
        popupElement.classList.add('show');
      }
    }, 15);  
  }

  hidePopup() {
    const popupElement = document.querySelector('.popup');
    if (popupElement) {
      popupElement.classList.remove('show');
    }
    setTimeout(() => {
      this.showPopup = false;
      this.isPopDisabled = false; 
    }, 500);  
  }
}