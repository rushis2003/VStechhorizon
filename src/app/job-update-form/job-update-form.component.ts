import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms'; // Ensure AbstractControl is imported

@Component({
  selector: 'app-job-update-form',
  templateUrl: './job-update-form.component.html',
  styleUrls: ['./job-update-form.component.scss']
})
export class JobUpdateFormComponent {

  updateForm: FormGroup;
  jobId: number = 0; // Assuming you get this from route params or elsewhere

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.updateForm = this.formBuilder.group({
      id: [{ value: '', disabled: true }, Validators.required],
      title: ['', Validators.required],
      experienceLevel: ['', Validators.required],
      jobLocation: ['', Validators.required],
      jobDescription: this.formBuilder.group({
        companyProfile: [''],
        position: [''],
        currentOpening: [''],
        primarySkill: ['', Validators.required],
        workDays: [''],
        workTimings: [''],
        salary: [''],
        educationalQualifications: [''],
        roleOverview: [''],
        requiredRoleAttributes: [''],
        requiredSkills: [''],
        additionalSkills: [''],
        careerPath: ['']
      })
    });
  }

  ngOnInit(): void {
    // this.jobId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.route.params.subscribe(params => {
      this.jobId = +params['id']; // Assuming the parameter is named 'id'
      // Directly implement logic to fetch job details here
      // this.jobDetails = this.getJobDetailsById(this.jobId);
    }); // Assuming jobId is in route params
    this.getJobDetails(this.jobId);
  }

  getJobDetails(jobId: number): void {
    // Replace 'your-api-endpoint' with your actual API endpoint
    this.http.get<any>(`http://192.168.0.3:3006/job/${jobId}`).subscribe(
      (job: any) => {

        console.log(job)
        this.updateForm.patchValue(job); // Patch values to the form

      },
      (error) => {
        console.error('Error fetching job details: ', error);
      }
    );
  }

  onSubmit(): void {
    if (this.updateForm.valid) {
      const formData = this.updateForm.getRawValue(); // Get raw form data
      // const primarySkillControl = this.updateForm.get('jobDescription.primarySkill');
      // const primarySkillValue = primarySkillControl?.value;
      // const primarySkillString = primarySkillValue.join(',');
      // const primarySkillArray = primarySkillString ? primarySkillString.split(',').map((skill: string) => skill.trim()) : [];
      function arrayToString(formControlValue: any): string {
        return formControlValue?.join(',') || '';
      }
      
      // Function to convert string back to array
      function stringToArray(str: string): string[] {
        return str ? str.split(',').map((item: string) => item.trim()) : [];
      }
      
      // Retrieve values from form controls
      const primarySkillControl = this.updateForm.get('jobDescription.primarySkill');
      const requiredRoleAttributesControl = this.updateForm.get('jobDescription.requiredRoleAttributes');
      const requiredSkillsControl = this.updateForm.get('jobDescription.requiredSkills');
      const additionalSkillsControl = this.updateForm.get('jobDescription.additionalSkills');
      const educationalQualificationsControl = this.updateForm.get('jobDescription.educationalQualifications');
      
      // Convert array to string
      const primarySkillString = arrayToString(primarySkillControl?.value);
      const requiredRoleAttributesString = arrayToString(requiredRoleAttributesControl?.value);
      const requiredSkillsString = arrayToString(requiredSkillsControl?.value);
      const additionalSkillsString = arrayToString(additionalSkillsControl?.value);
      const educationalQualificationsString = arrayToString(educationalQualificationsControl?.value);
      
      // Convert string back to array
      const primarySkillArray = stringToArray(primarySkillString);
      const requiredRoleAttributesArray = stringToArray(requiredRoleAttributesString);
      const requiredSkillsArray = stringToArray(requiredSkillsString);
      const additionalSkillsArray = stringToArray(additionalSkillsString);
      const educationalQualificationsArray = stringToArray(educationalQualificationsString);
      
      console.log(primarySkillArray); 
      // Check if primarySkillValue is an array
    
      console.log(formData)
      const jobData = {
        id: this.updateForm.value.id,
        title: this.updateForm.value.title,
        experienceLevel: this.updateForm.value.experienceLevel,
        jobLocation: this.updateForm.value.jobLocation,
        jobDescription: {
          companyProfile: this.updateForm.value.jobDescription.companyProfile,
          position: this.updateForm.value.jobDescription.position,
          currentOpening: this.updateForm.value.jobDescription.currentOpening,
          primarySkill: primarySkillArray, // Array of primary skills
          workDays: this.updateForm.value.jobDescription.workDays,
          workTimings: this.updateForm.value.jobDescription.workTimings,
          salary: this.updateForm.value.jobDescription.salary,
          educationalQualifications: educationalQualificationsArray, // Array of educational qualifications
          roleOverview: this.updateForm.value.jobDescription.roleOverview,
          requiredRoleAttributes: requiredRoleAttributesArray, // Array of required role attributes
          requiredSkills: requiredSkillsArray, // Array of required skills
          additionalSkills: additionalSkillsArray, // Array of additional skills
          careerPath: this.updateForm.value.jobDescription.careerPath
        }
      }
      console.log("jobData")
      console.log(jobData)
      console.log("jobData")
      















      // console.log(formData)
      // if (this.updateForm.valid) {
      //   const primarySkillArray = this.updateForm.get('jobDescription.primarySkill')?.value.split(',') || [];
      // const educationalQualificationsArray = this.updateForm.get('jobDescription.educationalQualifications')?.value.split(',') || [];
      // const requiredRoleAttributesArray = this.updateForm.get('jobDescription.requiredRoleAttributes')?.value.split(',') || [];
      // const requiredSkillsArray = this.updateForm.get('jobDescription.requiredSkills')?.value.split(',') || [];
      // const additionalSkillsArray = this.updateForm.get('jobDescription.additionalSkills')?.value.split(',') || [];

      // // Prepare data for backend
      // const jobData = {
      //   id: this.updateForm.value.id,
      //   title: this.updateForm.value.title,
      //   experienceLevel: this.updateForm.value.experienceLevel,
      //   jobLocation: this.updateForm.value.jobLocation,
      //   jobDescription: {
      //     companyProfile: this.updateForm.value.jobDescription.companyProfile,
      //     position: this.updateForm.value.jobDescription.position,
      //     currentOpening: this.updateForm.value.jobDescription.currentOpening,
      //     primarySkill: primarySkillArray, // Array of primary skills
      //     workDays: this.updateForm.value.jobDescription.workDays,
      //     workTimings: this.updateForm.value.jobDescription.workTimings,
      //     salary: this.updateForm.value.jobDescription.salary,
      //     educationalQualifications: educationalQualificationsArray, // Array of educational qualifications
      //     roleOverview: this.updateForm.value.jobDescription.roleOverview,
      //     requiredRoleAttributes: requiredRoleAttributesArray, // Array of required role attributes
      //     requiredSkills: requiredSkillsArray, // Array of required skills
      //     additionalSkills: additionalSkillsArray, // Array of additional skills
      //     careerPath: this.updateForm.value.jobDescription.careerPath
      //   }}
      //   console.log(jobData)

      // const primarySkillArray = this.updateForm.get('jobDescription.primarySkill')?.value.split(',') || [];
      // console.log(primarySkillArray);
      // const educationalQualificationsArray = this.updateForm.get('jobDescription.educationalQualifications')?.value.split(',') || [];
      // const requiredRoleAttributesArray = this.updateForm.get('jobDescription.requiredRoleAttributes')?.value.split(',') || [];
      // const requiredSkillsArray = this.updateForm.get('jobDescription.requiredSkills')?.value.split(',') || [];
      // const additionalSkillsArray = this.updateForm.get('jobDescription.additionalSkills')?.value.split(',') || [];


      // Replace 'your-api-endpoint' with your actual API endpoint for updating job
      this.http.put(`http://192.168.0.6/job/${this.jobId}`, jobData).subscribe(
        () => {
          console.log('Job updated successfully');
          alert("Job updated successfully")
          this.router.navigate(['/job-details']); // Navigate to jobs list page after update
        },
        (error) => {
          console.error('Error updating job: ', error);
        }
      );

    }
  }
  private markFormGroupTouched(formGroup: FormGroup | AbstractControl): void {
    (Object as any).values((formGroup as FormGroup).controls).forEach((control: AbstractControl) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}