// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-project-kit-buy-form',
//   templateUrl: './project-kit-buy-form.component.html',
//   styleUrls: ['./project-kit-buy-form.component.scss']
// })
// export class ProjectKitBuyFormComponent implements OnInit {
//   projectKitBuyForm!: FormGroup;
//   kits: string[] = ['Kit A', 'Kit B', 'Kit C']; // Sample project kits

//   constructor(private fb: FormBuilder, private http: HttpClient) { }

//   ngOnInit(): void {
//     this.projectKitBuyForm = this.fb.group({
//       fullName: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
//       address: ['', Validators.required],
//       pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
//       kit: ['', Validators.required],
//       quantity: [1, [Validators.required, Validators.min(1)]],
//       additionalRequests: ['']
//     });
//   }

//   onSubmit(): void {
//     if (this.projectKitBuyForm.valid) {
//       console.log('Form Submitted!', this.projectKitBuyForm.value);
//       this.http.post('http://localhost:3006/projectkit', this.projectKitBuyForm.value)
//         .subscribe(response => {
//           console.log('Response:', response);
//           alert('Form submitted successfully');
//           this.projectKitBuyForm.reset();
//         }, error => {
//           console.error('Error:', error);
//         });
//     } else {
//       console.log('Form is invalid');
//       alert('All fields are required');
//       this.markAllFieldsAsTouched();
//     }
//   }

//   private markAllFieldsAsTouched() {
//     Object.keys(this.projectKitBuyForm.controls).forEach(field => {
//       const control = this.projectKitBuyForm.get(field);
//       control?.markAsTouched({ onlySelf: true });
//     });
//   }
// }



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { KitBuyFormSuccessDialogComponent } from '../kit-buy-form-success-dialog/kit-buy-form-success-dialog.component';
import { ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-kit-buy-form',
  templateUrl: './project-kit-buy-form.component.html',
  styleUrls: ['./project-kit-buy-form.component.scss']
})
export class ProjectKitBuyFormComponent implements OnInit {
  
  projectKitBuyForm!: FormGroup;
  kits: string[] = ['Kit A', 'Kit B']; // Sample project kits

  constructor(private fb: FormBuilder, private http: HttpClient, private dialog: MatDialog,private router: Router) { }

  ngOnInit(): void {
    this.projectKitBuyForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      address: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      kit: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      additionalRequests: ['']
    });
  }

   onSubmit(): void {
    if (this.projectKitBuyForm.valid) {
      console.log('Form Submitted!', this.projectKitBuyForm.value);
      this.http.post('http://192.168.0.3:3006/projectkit', this.projectKitBuyForm.value)
        .subscribe(response => {
          console.log('Response:', response);
          alert('Form submitted successfully');
          this.projectKitBuyForm.reset();
        }, error => {
          console.error('Error:', error);
        });
    } else {
      console.log('Form is invalid');
      alert('All fields are required');
      this.markAllFieldsAsTouched();
    }
  }

  private markAllFieldsAsTouched() {
    Object.keys(this.projectKitBuyForm.controls).forEach(field => {
      const control = this.projectKitBuyForm.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }

  moveToNextInput(nextInput: string): void {
    const element = document.getElementById(nextInput);
    if (element) {
      element.focus();
    }
  }
  
   private scrollToFirstInvalidControl() {
     const firstInvalidControl: HTMLElement = document.querySelector('form .ng-invalid')!;
     firstInvalidControl.scrollIntoView({ behavior: 'smooth', block: 'center' });
   }

  private showSuccessDialog() {
    this.dialog.open(KitBuyFormSuccessDialogComponent);
    this.router.navigate(['/kit-buy-form-success-dialog'])
}


}