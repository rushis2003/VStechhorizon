// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-scholarship-form',
//   templateUrl: './scholarship-form.component.html',
//   styleUrls: ['./scholarship-form.component.scss']
// })
// export class ScholarshipFormComponent {
//   scholarshipForm: FormGroup;

//   constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
//     this.scholarshipForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       dateOfBirth: ['', Validators.required],
//       gender: ['', Validators.required],
//       address: ['', Validators.required],
//       currentStudyStatus: ['', Validators.required],
//       number: ['', Validators.required],
//       id: ['', Validators.required],
//       file: ['', Validators.required]
//     });
//   }

//   onSubmit() {
//     if (this.scholarshipForm.valid) {
//       const formData = new FormData();
//       Object.keys(this.scholarshipForm.value).forEach(key => {
//         formData.append(key, this.scholarshipForm.value[key]);
//       });

//       // Assuming the file is the last control in the form
//       const fileControl = this.scholarshipForm.get('file');
//       if (fileControl && fileControl.value) {
//         formData.append('file', fileControl.value);
//       }

//       this.http.post('http://localhost:3006/applyscholarship', formData).subscribe(
//         response => {
//           alert('Form submitted successfully');
//           console.log('Form submitted', response);
//           this.scholarshipForm.reset();
//         },
//         error => {
//           alert('Error submitting form');
//           console.log('Form submission error', error);
//         }
//       );
//     } else {
//       alert('All fields are required');
//       console.log('Form is invalid');
//     }
//   }
// }



// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-scholarship-form',
//   templateUrl: './scholarship-form.component.html',
//   styleUrls: ['./scholarship-form.component.scss']
// })
// export class ScholarshipFormComponent {
//   scholarshipForm: FormGroup;

//   constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
//     this.scholarshipForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       dateOfBirth: ['', Validators.required],
//       gender: ['', Validators.required],
//       address: ['', Validators.required],
//       currentStudyStatus: ['', Validators.required],
//       number: ['', Validators.required],
//       id: ['', Validators.required],
//       file: [null, Validators.required]
//     });
//   }

//   onFileChange(event: any) {
//     if (event.target.files.length > 0) {
//       const file = event.target.files[0];
//       this.scholarshipForm.patchValue({
//         file: file
//       });
//     }
//   }

//   onSubmit() {
//     if (this.scholarshipForm.valid) {
//       const formData = new FormData();

//       formData.append('name', this.scholarshipForm.get('name')?.value);
//       formData.append('email', this.scholarshipForm.get('email')?.value);
//       formData.append('dateOfBirth', this.scholarshipForm.get('dateOfBirth')?.value);
//       formData.append('gender', this.scholarshipForm.get('gender')?.value);
//       formData.append('address', this.scholarshipForm.get('address')?.value);
//       formData.append('currentStudyStatus', this.scholarshipForm.get('currentStudyStatus')?.value);
//       formData.append('number', this.scholarshipForm.get('number')?.value);
//       formData.append('id', this.scholarshipForm.get('id')?.value);
//       formData.append('file', this.scholarshipForm.get('file')?.value);

//       this.http.post('http://localhost:3006/applyscholarship', formData).subscribe(
//         response => {
//           alert('Form submitted successfully');
//           console.log('Form submitted', response);
//           this.scholarshipForm.reset();
//         },
//         error => {
//           alert('Error submitting form');
//           console.log('Form submission error', error);
//         }
//       );
//     } else {
//       alert('All fields are required');
//       console.log('Form is invalid');
//     }
//   }
// }



// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { FormService } from '../form.service';
// import { ClassToggleService } from '@coreui/angular';

// @Component({
//   selector: 'app-scholarship-form',
//   templateUrl: './scholarship-form.component.html',
//   styleUrls: ['./scholarship-form.component.scss']
// })
// export class ScholarshipFormComponent implements OnInit {
//   scholarshipForm: FormGroup;

//   constructor(private fb: FormBuilder, private router: Router, private formService: FormService) {
//     this.scholarshipForm = this.fb.group({
//       name: ['', Validators.required],
//       number: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       school: ['', Validators.required],
//       std: ['', Validators.required],
//       file1: ['', Validators.required], 
//       aadhar: ['', Validators.required],
//       dateOfBirth: ['', Validators.required],
//       gender: ['', Validators.required],
//       address: ['', Validators.required],
//       aadharadd: ['', Validators.required],

//     });

//   }

//   ngOnInit(): void {
//     const savedFormData = this.formService.loadFormData();
//     if (savedFormData) {
//       this.scholarshipForm.setValue(savedFormData);
//     }
//   }

//   onSave(): void {
//     if (this.scholarshipForm.valid) {
//       this.formService.saveFormData(this.scholarshipForm);
//       alert('Form Saved Successfully.');
//       console.log('Form data is saved',  this.scholarshipForm.value)
//     } else {
//       // alert('All fields are required.');
//     }
//   }
//   onFileChange(event: any): void {
//     if (event.target.files.length > 0) {
//       const file = event.target.files[0];
//       this.formService.setRegistrationFile(file);
//       this.scholarshipForm.patchValue({ file1: file });
//     }
//   }
//   onNext(): void {
//     if (this.scholarshipForm.valid) {
//       this.formService.saveFormData(this.scholarshipForm);
//       this.formService.setRegistrationData(this.scholarshipForm.value);
//       this.router.navigate(['/pay-page']);
//       console.log('Form data is saved',  this.scholarshipForm.value)
//     } else {
//       // alert('All fields are required.');
//     }
//   }

//   onSubmit(): void {
//     if (this.scholarshipForm.valid) {
//       // alert('Form Submitted Successfully.');
//       // console.log('Form Submitted', this.scholarshipForm.value);
//       // this.formService.saveFormData(this.scholarshipForm);
//     } else {
//       alert('All fields are required.');
//       console.log('Form is invalid');
//     }
//   }

//   clearFormOnReload(): void {
//     alert('clar form')
//     this.formService.clearFormData();
// }
// }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../form.service';


@Component({
  selector: 'app-scholarship-form',
  templateUrl: './scholarship-form.component.html',
  styleUrls: ['./scholarship-form.component.scss']
})
export class ScholarshipFormComponent implements OnInit {
  scholarshipForm: FormGroup;
  selectedStandard: string | null = null;
  years: string[] = [];


constructor(private fb: FormBuilder, private router: Router, private formService: FormService) {
  this.scholarshipForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
    number: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    email: ['', [Validators.required, Validators.email]],
    school: ['', Validators.required],
    std: ['', Validators.required],
    year: ['', Validators.required],
    branch: ['', Validators.required],
    file1: ['', Validators.required],
    aadhar: ['', [Validators.required, Validators.pattern(/^\d{12}$/)]],
    dateOfBirth: ['', Validators.required],
    gender: ['', Validators.required],
    address: ['', Validators.required],
    aadharadd: ['', Validators.required],
    referralCode: [''] 
  });


  this.scholarshipForm.get('std')?.valueChanges.subscribe(value => {
    this.onStandardChange(value);
  });
}
  get f() { return this.scholarshipForm.controls; }

    ngOnInit(): void {
    const savedFormData = this.formService.loadFormData();
    if (savedFormData) {
      this.scholarshipForm.setValue(savedFormData);
    }
  }

  onSave(): void {
    if (this.scholarshipForm.valid) {
      this.formService.saveFormData(this.scholarshipForm);
      alert('Form Saved Successfully.');
      console.log('Form data is saved',  this.scholarshipForm.value)
    } else {
      // alert('All fields are required.');
    }
  }
  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formService.setRegistrationFile(file);
      this.scholarshipForm.patchValue({ file1: file });
    }
  }
  onNext(): void {
    if (this.scholarshipForm.valid) {

      console.log("valid scholership data"+this.scholarshipForm.value);
      console.log("valid save data"+this.scholarshipForm)
      this.formService.saveFormData(this.scholarshipForm);
      this.formService.setRegistrationData(this.scholarshipForm.value);
      this.router.navigate(['/term-condition']);
      console.log('Form data is saved',  this.scholarshipForm.value)
    } else {
      // alert('All fields are required.');
    }
  }

  onSubmit(): void {
    if (this.scholarshipForm.valid) {
      // alert('Form Submitted Successfully.');
      // console.log('Form Submitted', this.scholarshipForm.value);
      // this.formService.saveFormData(this.scholarshipForm);
    } else {
      alert('All fields are required.');
      console.log('Form is invalid');
    }
  }

  clearFormOnReload(): void {
    this.formService.clearFormData();
  }
  onStandardChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const standard = target.value;
    this.selectedStandard = standard;
    if (standard === 'diploma') {
      this.years = ['1st Year', '2nd Year', '3rd Year'];
    } else if (standard === 'degree') {
      this.years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
    } else {
      this.years = [];
    }
  }
}

