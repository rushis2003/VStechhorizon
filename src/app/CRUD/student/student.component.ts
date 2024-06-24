import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  students : any[]=[] ;

  private baseUrl = 'http://192.168.0.3:3006';
  constructor(private http: HttpClient){}

  ngOnInit() {
    this.http.get<any[]>(`${this.baseUrl}/applications`).subscribe(
      data => {
        this.students = data;
        console.log(this.students); // Log the data after assignment
      },
      error => console.error('Error fetching resumes:', error)
    );
  }

}