import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-job-add-form',
  templateUrl: './job-add-form.component.html',
  styleUrls: ['./job-add-form.component.scss']
})
export class JobAddFormComponent {
  private apiUrl = 'http://192.168.0.3:3006';
  addForm: FormGroup;

  constructor(private fb: FormBuilder, private http:HttpClient ,private router:Router) {
    this.addForm = this.fb.group({
      title: ['', Validators.required],
      experienceLevel: ['', Validators.required],
      jobLocation: ['', Validators.required],
      jobDescription: this.fb.group({
        companyProfile: ['', Validators.required],
        position: ['', Validators.required],
        // currentOpening: [null, Validators.required],
        currentOpening: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
        primarySkill: ['', Validators.required],
        workDays: ['', Validators.required],
        workTimings: ['', Validators.required],
        salary: ['', Validators.required],
        educationalQualifications: ['', Validators.required],
        roleOverview: ['', Validators.required],
        requiredRoleAttributes: ['', Validators.required],
        requiredSkills: ['', Validators.required],
        additionalSkills: ['', Validators.required],
        careerPath: ['', Validators.required]
      })
    });
  }

  onSubmit() {
    if (this.addForm.valid) {
      const primarySkillArray = this.addForm.get('jobDescription.primarySkill')?.value.split(',') || [];
    const educationalQualificationsArray = this.addForm.get('jobDescription.educationalQualifications')?.value.split(',') || [];
    const requiredRoleAttributesArray = this.addForm.get('jobDescription.requiredRoleAttributes')?.value.split(',') || [];
    const requiredSkillsArray = this.addForm.get('jobDescription.requiredSkills')?.value.split(',') || [];
    const additionalSkillsArray = this.addForm.get('jobDescription.additionalSkills')?.value.split(',') || [];

    // Prepare data for backend
    const jobData = {
      title: this.addForm.value.title,
      experienceLevel: this.addForm.value.experienceLevel,
      jobLocation: this.addForm.value.jobLocation,
      jobDescription: {
        companyProfile: this.addForm.value.jobDescription.companyProfile,
        position: this.addForm.value.jobDescription.position,
        currentOpening: this.addForm.value.jobDescription.currentOpening,
        primarySkill: primarySkillArray, // Array of primary skills
        workDays: this.addForm.value.jobDescription.workDays,
        workTimings: this.addForm.value.jobDescription.workTimings,
        salary: this.addForm.value.jobDescription.salary,
        educationalQualifications: educationalQualificationsArray, // Array of educational qualifications
        roleOverview: this.addForm.value.jobDescription.roleOverview,
        requiredRoleAttributes: requiredRoleAttributesArray, // Array of required role attributes
        requiredSkills: requiredSkillsArray, // Array of required skills
        additionalSkills: additionalSkillsArray, // Array of additional skills
        careerPath: this.addForm.value.jobDescription.careerPath
      }}

      this.http.post<any>(`${this.apiUrl}/job`,jobData).subscribe(
        (response)=>{
          console.log(response)
          this.addForm.reset();
          alert("Added Succefully");
          this.router.navigate(['/job-details']);
        },
        (error)=>{
          console.log(error)
        }
        
      )
      console.log('Form Submitted!', this.addForm.value);
    } else {
      console.log('Form is invalid!');
    }
  }
}