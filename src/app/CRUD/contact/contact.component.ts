import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contacts: any[] = [];


  private baseUrl = 'http://192.168.0.3:3006';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>(`${this.baseUrl}/contact`).subscribe(
      data => {
        this.contacts = data;
        console.log(this.contacts); // Log the data after assignment
      },
      error => console.error('Error fetching resumes:', error)
    );
  }
}

