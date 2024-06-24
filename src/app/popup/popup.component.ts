// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-popup',
//   templateUrl: './popup.component.html',
//   styleUrls: ['./popup.component.scss']
// })
// export class PopupComponent {

// }

// import { Component } from '@angular/core';
// import { EventEmitter, Output } from '@angular/core';

// @Component({
//   selector: 'app-popup',
//   templateUrl: './popup.component.html',
//   styleUrls: ['./popup.component.scss']
// })
// export class PopupComponent {
//   @Output() close = new EventEmitter<void>();

//   onClose() {
//     this.close.emit();
// }


// }


// import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// interface PopupSettings {
//   showPopup: boolean;
//   popupType: 'text' | 'image';
//   popupContent: string;
//   imageUrl: string;
// }

// @Component({
//   selector: 'app-popup',
//   templateUrl: './popup.component.html',
//   styleUrls: ['./popup.component.scss']
// })
// export class PopupComponent implements OnInit {
//   showPopup: boolean = false;
//   popupType: 'text' | 'image' = 'text';
//   popupContent: string = '';
//   imageUrl: string = '';

//   @Output() close = new EventEmitter<void>();

//   constructor(private http: HttpClient) { }

//   ngOnInit(): void {
//     this.getPopupSettings();
//   }

//   getPopupSettings(): void {
//     this.http.get<PopupSettings>('http://localhost:3006/popup-settings').subscribe(settings => {
//       this.showPopup = settings.showPopup;
//       this.popupType = settings.popupType;
//       this.popupContent = settings.popupContent;
//       this.imageUrl = settings.imageUrl;
//     });
//   }

//   onClose() {
//     // this.showPopup = false;
//     // this.http.post('http://localhost:3000/api/popup-settings', {
//     //   showPopup: this.showPopup,
//     //   popupType: this.popupType,
//     //   popupContent: this.popupContent,
//     //   imageUrl: this.imageUrl
//     // }).subscribe();
//     // this.close.emit();
//   }
// }



import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface PopupSettings {
  showPopup: boolean;
  popupType: 'text' | 'image';
  popupContent: string;
  imageUrl: string;
}

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  showPopup: boolean = true;
  popupType: 'text' | 'image' = 'text';
  popupContent: string = '';
  imageUrl: string = '';
  
  @Output() close = new EventEmitter<void>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPopupSettings();
    console.log(this.showPopup)
  }

  getPopupSettings(): void {
    this.http.get<PopupSettings>('http://192.168.0.3/popup-settings').subscribe(settings => {
      this.showPopup = settings.showPopup;
      console.log(settings.showPopup)
      this.popupType = settings.popupType;
      this.popupContent = settings.popupContent;
      this.imageUrl = settings.imageUrl;
      console.log(this.imageUrl)
    });
  }

  onClose(): void {
    this.showPopup = false;
    this.close.emit();
  }
}
