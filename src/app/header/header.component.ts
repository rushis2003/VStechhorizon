
import { Component, OnInit, ViewChild, ElementRef, OnDestroy  } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{


  showPopup: boolean = false;
  constructor(private router: Router, private http :HttpClient) {}
  scrollToserviceSection(section: string) {
    this.router.navigate(['/detailed-info-service'], { fragment: section });
  }

  // ngOnInit(): void {
    
  // }

  ngOnInit(): void {
    this.fetchPopupSettings();
    setInterval(() => {
      this.scrollRight();
    }, 5000)
    // this.disableScroll();
  }

  fetchPopupSettings() {
    this.http.get<{ showPopup: boolean }>('http://192.168.0.3:3006/popup-settings')
      .subscribe(response => {
        this.showPopup = response.showPopup;
        // this.showPopup=false;
        if (this.showPopup) {
          this.disableScroll();
        }
      }, error => {
        console.error('Error fetching popup settings:', error);
      });
  }

  closePopup() {
    this.showPopup = false;

    this.enableScroll();
  }


  // closePopup() {
  //   this.showPopup = false;
  //   this.enableScroll();
  // }

  disableScroll() {
    document.body.classList.add('no-scroll');
  }

  // Method to enable scrolling
  enableScroll() {
    document.body.classList.remove('no-scroll');
  }
  


  Images = [
    '/assets/VS Tech Horizon (1) Website Final Poster1.png',
    '../../assets/VS Tech Horizon (1) STEAM CONNECT final poster1.png',
     '../../assets/VS Tech Horizon (1) Technology final poster1.png',
    // '../../assets/four-kids-building-drone-using-electronic-parts.jpg',
    // '../../assets/father-sons-making-robot.jpg',
    // '../../assets/cartoon-dragon-character.jpg',
];

currentIndex = 0;
transitionEnabled = true;

scrollLeft() {
  this.transitionEnabled = true;
  this.currentIndex = (this.currentIndex === 0) ? this.Images.length - 1 : this.currentIndex - 1;
}

scrollRight() {
  this.transitionEnabled = true;
  if (this.currentIndex === this.Images.length - 1) {
      this.currentIndex = 0;
      this.transitionEnabled = false;
      setTimeout(() => {
          this.transitionEnabled = true;
          this.scrollRight();
      }, 5000); 
  } else {
      this.currentIndex++;
  }
}

  //services
  currBoxIndex = 0;
  totalBoxes = 18;

  previousBox() {
    this.currBoxIndex = (this.currBoxIndex - 1 + this.totalBoxes) % this.totalBoxes;
  }

  nextBox() {
    this.currBoxIndex = (this.currBoxIndex + 1) % this.totalBoxes;
  }

//feedback


}



// import { Component, OnInit, ViewChild, ElementRef, OnDestroy  } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent implements OnInit  {


// Images = [
//     '/assets/young-man-woman-protective-glasses-doing-experiments-robotics-laboratory.jpg',
//     '../../assets/young-engineer-working-new-school-project-robotics.jpg',
//     '../../assets/top-view-woman-drawing-ipad.jpg',
//     '../../assets/four-kids-building-drone-using-electronic-parts.jpg',
//     '../../assets/father-sons-making-robot.jpg',
//     '../../assets/cartoon-dragon-character.jpg',
// ];

// currentIndex = 0;
// transitionEnabled = true;

// scrollLeft() {
//   this.transitionEnabled = true;
//   this.currentIndex = (this.currentIndex === 0) ? this.Images.length - 1 : this.currentIndex - 1;
// }

// scrollRight() {
//   this.transitionEnabled = true;
//   if (this.currentIndex === this.Images.length - 1) {
//       this.currentIndex = 0;
//       this.transitionEnabled = false;
//       setTimeout(() => {
//           this.transitionEnabled = true;
//           this.scrollRight();
//       }, 5000); 
//   } else {
//       this.currentIndex++;
//   }
// }

//   //services
//   currBoxIndex = 0;
//   totalBoxes = 18;

//   previousBox() {
//     this.currBoxIndex = (this.currBoxIndex - 1 + this.totalBoxes) % this.totalBoxes;
//   }

//   nextBox() {
//     this.currBoxIndex = (this.currBoxIndex + 1) % this.totalBoxes;
//   }

//   //feedback
 
 
//   showPopup = false;
//   name = '';
//   message = '';

//   ngOnInit() {
//     setInterval(() => {
//       this.scrollRight();
//     }, 5000);
//     this.showPopupBox();
//   }

//   showPopupBox() {
//     this.showPopup = true;
//     setTimeout(() => {
//       const popupElement = document.querySelector('.popup');
//       if (popupElement) {
//         popupElement.classList.add('show');
//       }
//     }, 15);  
//   }

//   hidePopup() {
//     const popupElement = document.querySelector('.popup');
//     if (popupElement) {
//       popupElement.classList.remove('show');
//     }
//     setTimeout(() => {
//       this.showPopup = false;
//     }, 500);  
//   }

// }

