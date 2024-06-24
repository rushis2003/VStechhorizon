import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-kit',
  templateUrl: './kit.component.html',
  styleUrls: ['./kit.component.scss']
})
export class KitComponent {
  projectkits : any[]=[] ;

  private baseUrl = 'http://192.168.0.3:3006';
  constructor(private http: HttpClient){}

  ngOnInit() {
    this.http.get<any[]>(`${this.baseUrl}/projectkits`).subscribe(
      data => {
        this.projectkits = data;
        console.log(this.projectkits); // Log the data after assignment
      },
      error => console.error('Error fetching resumes:', error)
    );
  }
}
