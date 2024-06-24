import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  // onButtonClick(buttonName: string) {
  //    console.log(`Button ${buttonName} clicked!`);
  // }

  // title = 'coursePage'; 
  // course_list_value = 0;
  
  // ButtonClick0(){
  //   this.course_list_value = 0;
  // }
  // ButtonClick1(){
  //   this.course_list_value = 1;
  // }

  
  showPopup = false;
  name = '';
  message = '';

  ngOnInit() {
    
    // this.showPopupBox();
  }

  showPopupBox() {
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
    }, 500);  
  }

}
