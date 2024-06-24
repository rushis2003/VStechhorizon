import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {


  // jobOpenings = [{id:1,Title:'Software Developer Intern',experiencLevel: "Fresher",JobLocation:" Pune (Work from office)"},{id:2,Title:'Robotic Trainee Intern',experiencLevel: "Fresher",JobLocation:" Pune (Work from office)"}];
  // ngOnInit(): void {
  // }




  jobOpenings: any[]=[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchJobs();
  }

  fetchJobs() {
    this.http.get<any[]>('http://192.168.0.3:3006/jobs')
      .subscribe(jobs => {
        console.log(jobs);
        this.jobOpenings = jobs;
      }, error => {
        console.error('Error fetching jobs:', error);
      });
  }


}
