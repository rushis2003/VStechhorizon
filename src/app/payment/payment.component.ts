// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-payment',
//   templateUrl: './payment.component.html',
//   styleUrls: ['./payment.component.scss']
// })
// export class PaymentComponent {

//   transactionId: string = '';
//   screenshot: File | null = null;
//   formValid: boolean = false;
//   upiId: string = 'abcd1457df'; 

//   constructor(private router: Router) { }

//   onFileChange(event: any) {
//     this.screenshot = event.target.files[0];
//     this.checkFormValidity();
//   }

//   checkFormValidity() {
//     this.formValid = 
//     this.transactionId.trim() !== '' && 
//     this.screenshot !== null;
//   }

//   submitPayment() {
//     if (this.formValid) {
//       alert('Submission successfully completed.\nTransaction ID: ' + this.transactionId);
//     }
//   }
//   copyUPIId() {
//     const textArea = document.createElement('textarea');
//     textArea.value = this.upiId;
//     document.body.appendChild(textArea);
//     textArea.select();
//     document.execCommand('copy');
//     document.body.removeChild(textArea);
//     alert('UPI ID copied to clipboard: ' + this.upiId);
// }
// }


import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormService } from '../form.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  transactionId: string = '';
  screenshot: File | null = null;
  formValid: boolean = false;
  upiId: string = 'abcd1457df';

  constructor(private http: HttpClient, private formService: FormService, private router:Router) { }

  ngOnInit(): void {
    this.clearFormOnReload();
  }

  clearFormOnReload(): void {
    const form = document.getElementById('myForm') as HTMLFormElement;
    if (form) {
      form.reset();
    }
  }

  checkFormValidity(): void {
    this.formValid = this.transactionId !== '' && this.screenshot !== null;
  }

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.screenshot = event.target.files[0];
      this.checkFormValidity();
    }
  }

  submitPayment(): void {
    const formData = new FormData();
    formData.append('transactionId', this.transactionId);
    if (this.screenshot) {
      formData.append('screenshot', this.screenshot);
    }
    const registrationData = this.formService.getRegistrationData();
    const registrationFile = this.formService.getRegistrationFile();

    formData.append('name', registrationData.name);
    formData.append('number', registrationData.number);
    formData.append('email', registrationData.email);
    formData.append('school', registrationData.school);
    formData.append('std', registrationData.std);
    formData.append('year', registrationData.year);
    formData.append('branch', registrationData.branch);
    formData.append('aadhar', registrationData.aadhar);
    formData.append('dateOfBirth', registrationData.dateOfBirth);
    formData.append('gender', registrationData.gender);
    formData.append('address', registrationData.address);
    formData.append('aadharadd', registrationData.aadharadd);
    formData.append('referralCode', registrationData.referralCode);
    
//referralCode
    if (registrationFile) {
      formData.append('file1', registrationFile);
    }

    this.http.post('http://192.168.0.3:3006/applyscholarship', formData).subscribe(
      response => {
        // console.log('Payment details submitted successfully', response);
        this.showPopup();

        // alert('Scholarship Registration Received.\nThank you for registering.\nWe have received your payment details.\n Your registration will be confirmed once we verify your transaction ID.\nOur team is reviewing your payment. \nThis process typically takes 2-3 business days. We will notify you via email once confirmed.\nThank you for Registering.');
        // window.location.href ='/';

        this.clearFormOnReload(); // Clear form on successful submission
      },
      error => {
        console.error('Error submitting payment details', error);
      }
    );
  }

  copyUPIId(): void {
    const textArea = document.createElement('textarea');
    textArea.value = this.upiId;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('UPI ID copied to clipboard: ' + this.upiId);
  }
  // submitPayment() {
  //   if (this.formValid) {
      
  //   }
  // }

  showPopup() {
    const popupDialog = document.getElementById('popupDialog');
    if (popupDialog) {
      popupDialog.style.display = 'flex';
    }
  }

  closePopup() {
    const popupDialog = document.getElementById('popupDialog');
    if (popupDialog) {
      popupDialog.style.display = 'none';
      this.router.navigate(['/']);
    }
  }
}


// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-payment',
//   templateUrl: './payment.component.html',
//   styleUrls: ['./payment.component.scss']
// })
// export class PaymentComponent {

//   transactionId: string = '';
//   screenshot: File | null = null;
//   formValid: boolean = false;
//   upiId: string = 'abcd1457df';

//   constructor(private router: Router) { }

//   onFileChange(event: any) {
//     this.screenshot = event.target.files[0];
//     this.checkFormValidity();
//   }

//   checkFormValidity() {
//     const transactionIdLength = this.transactionId.trim().length;
//     this.formValid = transactionIdLength >= 3 && transactionIdLength <= 50 && this.screenshot !== null;
//   }

//   submitPayment() {
//     if (this.formValid) {
//       alert('Submission successfully completed.\nTransaction ID: ' + this.transactionId);
//     }
//   }

//   copyUPIId() {
//     const textArea = document.createElement('textarea');
//     textArea.value = this.upiId;
//     document.body.appendChild(textArea);
//     textArea.select();
//     document.execCommand('copy');
//     document.body.removeChild(textArea);
//     alert('UPI ID copied to clipboard: ' + this.upiId);
//   }
// }