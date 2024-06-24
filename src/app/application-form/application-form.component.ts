import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,AbstractControl} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent {
  jobs: any[] = [];
  private apiUrl = 'http://192.168.0.3:3006/store-data';
  applicationForm: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private http: HttpClient) {
    this.applicationForm = this.fb.group({
      position: ['', Validators.required],
      firstName: ['', [Validators.required, this.alphaValidator]],
      lastName: ['', [Validators.required, this.alphaValidator]],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required, this.numericValidator]],
      alternateContactNumber: ['', this.numericValidator],
      dob: ['', Validators.required],
      linkedin: [''],
      currentCompany: ['', Validators.required],
      totalExperience: ['', Validators.required],
      relevantExperience: ['', Validators.required],
      currentCTC: ['', Validators.required],
      expectedCTC: ['', Validators.required],
      noticePeriod: ['', Validators.required],
      resume: ['', Validators.required]
    });
  }


  alphaValidator(control: AbstractControl): { [key: string]: any } | null {
    const valid = /^[A-Za-z]+$/.test(control.value);
    return valid ? null : { alpha: true };
  }

  numericValidator(control: AbstractControl): { [key: string]: any } | null {
    const valid = /^[0-9]{10}$/.test(control.value);
    return valid ? null : { numeric: true };
  }
  isControlInvalid(controlName: string): boolean {
    const control = this.applicationForm.get(controlName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.applicationForm.patchValue({
        resume: file
      });
    }
  }
  onSubmit(): void {
    this.submitted = true;
    const formData = new FormData();
    // formData.append(this.applicationForm.value)

    if (this.applicationForm.valid) {
      const formData = new FormData();
      formData.append('position', this.applicationForm.get('position')?.value);
      formData.append('firstName', this.applicationForm.get('firstName')?.value);
      formData.append('lastName', this.applicationForm.get('lastName')?.value);
      formData.append('email', this.applicationForm.get('email')?.value);
      formData.append('contactNumber', this.applicationForm.get('contactNumber')?.value);
      formData.append('alternateContactNumber', this.applicationForm.get('alternateContactNumber')?.value);
      formData.append('dob', this.applicationForm.get('dob')?.value);
      formData.append('linkedin', this.applicationForm.get('linkedin')?.value);
      formData.append('currentCompany', this.applicationForm.get('currentCompany')?.value);
      formData.append('totalExperience', this.applicationForm.get('totalExperience')?.value);
      formData.append('relevantExperience', this.applicationForm.get('relevantExperience')?.value);
      formData.append('currentCTC', this.applicationForm.get('currentCTC')?.value);
      formData.append('expectedCTC', this.applicationForm.get('expectedCTC')?.value);
      formData.append('noticePeriod', this.applicationForm.get('noticePeriod')?.value);
      formData.append('resume', this.applicationForm.get('resume')?.value);
      this.http.post<any>('http://192.168.0.3:3006/applicationforms', formData)
        .subscribe(response => {
          // Handle response from the backend
          console.log(response);
          this.snackBar.open('Form successfully submitted!', 'Close', {
            duration: 3000,
          });
          alert('Form submitted successfully!');
        }, error => {
          console.error('Submission error:', error);
          alert('Failed to submit form. Please try again.');
        }
        );

      // Clear the form
      this.applicationForm.reset();
      this.submitted = false;
    } else {
      console.log('Form is invalid');
    }
  }
  ngOnInit() {
    this.fetchJobDetails()
  }
  fetchJobDetails(): void {


    this.http.get<any>(`http://192.168.0.3:3006/jobs`).subscribe(
      data => {
        this.jobs = data;
      },
      error => alert('Error fetching job details: ' + error.message)
    );
  }

}
