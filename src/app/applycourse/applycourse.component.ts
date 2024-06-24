import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-applycourse',
  templateUrl: './applycourse.component.html',
  styleUrls: ['./applycourse.component.scss']
})
export class ApplycourseComponent {

  applicationForm: FormGroup;
  standard: string[] = [ 'Class 5', 'Class 6', 'Class 7','Class 8','Class 9','Class 10','Class 11','Class 12'];
  // subject: { [key: string]: string[] } = {
  //   'Class 5': ['Math', 'Science', 'History','Geograpghy','English', 'Hindi'],
  //   'Class 6': ['Math', 'Science', 'History','Geograpghy','English', 'Hindi'],
  //   'Class 7': ['Math', 'Science', 'History','Geograpghy','English', 'Hindi'],
  //   'Class 8': ['Math', 'Science', 'History','Geograpghy','English', 'Hindi'],
  //   'Class 9': ['Math', 'Science', 'History','Geograpghy','English', 'Hindi'],
  //   'Class 10': ['Math', 'Science', 'History','Geograpghy','English', 'Hindi'],
  //   'Class 11': ['Physics', 'Chemistry', 'Math','Biology'],
  //   'Class 12': ['Physics', 'Chemistry', 'Math','Biology']
  // }

  subject: { [key: string]: string[] } = {
    'Class 5': ['Math', 'Science', 'History','Geograpghy','English', 'Hindi'],
    'Class 6': ['Math', 'Science', 'History','Geograpghy','English', 'Hindi'],
    'Class 7': ['Math', 'Science', 'History','Geograpghy','English', 'Hindi'],
    'Class 8': ['Math', 'Science', 'History','Geograpghy','English', 'Hindi'],
    'Class 9': ['Math', 'Science', 'History','Geograpghy','English', 'Hindi'],
    'Class 10': ['Math', 'Science', 'History','Geograpghy','English', 'Hindi'],
    'Class 11': ['Physics', 'Chemistry', 'Math','Biology'],
    'Class 12': ['Physics', 'Chemistry', 'Math','Biology']
  }
  availableSubject: string[] = [];


  constructor(private fb: FormBuilder) {
  this.applicationForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    course: ['', Validators.required],
    standard: ['', Validators.required],
    subject: [[], Validators.required]
  });

  //  this.applicationForm.get('standard')?.valueChanges.subscribe(selectedStandard => {
  //  this.availableSubject = this.subject[selectedStandard] || [];
  //  this.applicationForm.get('subject')?.setValue([]);
  //  });

    this.applicationForm.get('standard')?.valueChanges.subscribe(selectedStandard => {
    this.availableSubject = this.subject[selectedStandard] || [];
    this.applicationForm.get('subject')?.setValue([]);
    });

  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.applicationForm.valid) {
      console.log(this.applicationForm.value);
      alert('Application submitted successfully!');
      this.applicationForm.reset();
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }

}



