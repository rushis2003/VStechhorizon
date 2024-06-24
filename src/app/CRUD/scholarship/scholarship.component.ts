import { Component } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-scholarship',
  templateUrl: './scholarship.component.html',
  styleUrls: ['./scholarship.component.scss']
})
export class ScholarshipComponent {
  scholarships : any[]=[] ;
  scholarshipStatus: { [scholarshipId: number]: string } = {};

  private baseUrl = 'http://192.168.0.3:3006';
  constructor(private http: HttpClient){}

  ngOnInit() {
    this.getScholarshipDetails();
  }

  getScholarshipDetails(){
    this.http.get<any[]>(`${this.baseUrl}/scholarships`).subscribe(
      data => {
        this.scholarships = data;
        console.log(this.scholarships); // Log the data after assignment
      },
      error => console.error('Error fetching resumes:', error)
    );
  }


  scholarshipFormAccepted(scholarship: any) {
    this.http.post(`${this.baseUrl}/accept`, { scholarshipId: scholarship.scholarshipId }).subscribe(() => {
      alert("accepte")
      this.getScholarshipDetails();
    }, error => {
      console.error('Error accepting scholarship:', error);
    });
  }

  scholarshipFormRejected(scholarship: any) {
    this.http.post(`${this.baseUrl}/reject`, { scholarshipId: scholarship.scholarshipId }).subscribe(() => {
      alert("Rejected")
      this.getScholarshipDetails();
    }, error => {
      console.error('Error rejecting scholarship:', error);
    })
  }


  updateScholarshipStatus(id: number, status: number): void {
    const url = `${this.baseUrl}/updatescholarshipstatus/${id}/${status}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { status: status };

    this.http.put(url, body, { headers: headers }).subscribe(
      response => {
        alert('Scholarship status updated successfully');
        console.log('Updated Scholarship:', response);
        // Optionally refresh the list of scholarships here
      },
      error => {
        alert('Error updating scholarship status: ' + error.message);
      }
    );
  }

  // scholarshipFormAccepted(id: number): void {
  //   this.accepted = true;
  //   this.updateScholarshipStatus(id, 2); // 2 for accepted
  // }

  // scholarshipFormRejected(id: number): void {
  //   this.rejected = true;
  //   this.updateScholarshipStatus(id, 3); // 3 for rejected
  // }
}
