import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent {
  subscribeData: any;
  private apiUrl = 'http://192.168.0.3:3006/subscribe'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(this.apiUrl).subscribe(response => {
      this.subscribeData = response;
    });
  }
}