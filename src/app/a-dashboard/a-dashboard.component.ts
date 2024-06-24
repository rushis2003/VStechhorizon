import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormBuilder, FormGroup } from '@angular/forms';
interface PopupSettings {
  showPopup: boolean;
  popupType: 'text' | 'image';
  popupContent: string;
  imageUrl: string;
}

@Component({
  selector: 'app-a-dashboard',
  templateUrl: './a-dashboard.component.html',
  styleUrls: ['./a-dashboard.component.scss']
})
export class ADashboardComponent implements OnInit {


  isSidebarOpen: boolean = false;
  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }


  buyKitCount: number = 0;
  subscribersCount: number = 0;
  contactUsCount: number = 0;
  scholarshipCount: number = 0;

  // showPopup: boolean = false;
  // popupType: 'text' | 'image' = 'text';
  // popupContent: string = 'We have an announcement.';
  // imageUrl: string = 'your-image-url.jpg';

  // constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Replace these with actual service calls

    ///counts
    this.http.get<any>('http://192.168.0.3:3006/counts').subscribe((coutn) => {
      
      this.buyKitCount = coutn.buyKitCount;
      this.subscribersCount = coutn.subscribersCount
      this.contactUsCount = coutn.contactUsCount;
      this.scholarshipCount = coutn.scholarshipCount;
    });
  }

  // getPopupSettings(): void {
  //   this.http.get<PopupSettings>('http://localhost:3000/api/popup-settings').subscribe(settings => {
  //     this.showPopup = settings.showPopup;
  //     this.popupType = settings.popupType;
  //     this.popupContent = settings.popupContent;
  //     this.imageUrl = settings.imageUrl;
  //   });
  // }

//   savePopupSettings(): void {
//     const settings: PopupSettings = {
//       showPopup: this.showPopup,
//       popupType: this.popupType,
//       popupContent: this.popupContent,
//       imageUrl: this.imageUrl
//     };

//     this.http.post('http://localhost:3006/popup-settings', settings).subscribe(() => {
//       alert('Popup settings saved!');
//     });
//   }
// }


showPopup: boolean = false;
  popupType: string = 'text';
  popupContent: string = '';
  imageUrl: string = '';
  imageFile: File | null = null;

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  onFileChange(event: any) {
    this.imageFile = event.target.files[0];
  }

  savePopupSettings() {
    const formData: FormData = new FormData();
    formData.append('showPopup', this.showPopup.toString());
    formData.append('popupType', this.popupType);

    if (this.popupType === 'text') {
      formData.append('popupContent', this.popupContent);
    } else if (this.popupType === 'image' && this.imageFile) {
      formData.append('imageFile', this.imageFile, this.imageFile.name);
    }
    console.log(formData)
    alert("in save popup")
    this.http.post('http://192.168.0.6:3006/popup-settings', formData)
      .subscribe(response => {
        console.log('Settings saved', response);
      }, error => {
        console.error('Error saving settings', error);
      });
  }
  updatePopupSettings(){

  }
  deletePopupSettings(){

  }

}

