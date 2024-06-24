import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent {
  jobs:any[]=[]
  constructor(private router: Router, private http:HttpClient) {

  }
  ngOnInit() {
    this.fetchJobDetails()
  }
  fetchJobDetails(): void {
   

    this.http.get<any>(`http://192.168.0.3:3006/jobs`).subscribe(
      data => {
        this.jobs=data;
      },
      error => alert('Error fetching job details: ' + error.message)
    );
  }

  // enableEditMode(): void {
  //   this.editMode = true;
  // }
  add() {
    this.router.navigate(['/job-add-form']);
  }

  delete(jobId:number) {
    this.http.delete<any>(`http://192.168.0.3:3006/job/${jobId}`).subscribe(
      data => {
        alert(data.message)
        this.fetchJobDetails();
      },
      error => alert('Error fetching job details: ' + error.message)
    );
  }
  updateJob(jobId: string): void {
    // Navigate to '/job-update-form' and pass jobId as a parameter
    this.router.navigate(['/job-update-form', jobId]);
  }
}