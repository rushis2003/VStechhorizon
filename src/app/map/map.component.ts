import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  ngOnInit() {
    this.initMap();
  }

  initMap() {
    const location = { lat: 18.5817, lng: 74.0180 }; 

    const map = new google.maps.Map(document.getElementById('map'), {
      center: location,
      zoom: 15 
    });

    
    const marker = new google.maps.Marker({
      position: location,
      map: map,
      title: 'Kesnand, Pune'
    });
  }
}
