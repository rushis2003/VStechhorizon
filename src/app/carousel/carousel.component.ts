import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images = [
    '../../assets/father-son-making-robot (1).jpg',
    '../../assets/girls-female-teacher-doing-science-experiments-together.jpg',
    '../../assets/student-online-cute-girl-glasses-sweater-studying-computer-writing-down-notes.jpg',
    '../../assets/young-child-making-diy-project-from-upcycled-materials.jpg',
    '../../assets/father-sons-making-robot.jpg',
    'assets/portrait-male-technician-holding-motherboard-his-hand.jpg',
    'assets/man-with-tablet-learning-make-robot.jpg',
    
  ];

  currentIndex = 0;

  previousImg() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextImg() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
