import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import * as L from 'leaflet';
import {FoodserviceService} from "../foodservice.service";

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
  standalone: false
})
export class LocationPage implements OnInit {

  lat: number = 0;
  lon: number = 0;

  // MAPS
  map: any;
  markerLokasi:any;
  markerTeman:any;
  lat2= 0.0
  lon2= 0.0

  // TIMER
  timerSubscription: Subscription | undefined;
  isInit=false

  constructor(
    private foodService: FoodserviceService
  ) { }

  ngOnInit() {
    this.getCoordinates();
  }

  startTimer() {
    this.timerSubscription = interval(1000).subscribe(() => {
      this.getCoordinates()
    });
  }

  moving() {
    this.markerLokasi.setLatLng([this.lat,this.lon])
    // this.map.flyTo([this.lat, this.lon], 13);
    this.foodService
      .position_xy()
      .subscribe((data) => {
        console.log("MASUK")
        this.markerTeman.setLatLng([data.y, data.x]);
      })
  }

  initializeMap() {
    // Create a map centered at a specific location
    this.map = L.map('map').setView([this.lat, this.lon], 13);

    // Add a gmap street tile layer (you may use other providers, like bing OpenStreetMap, mapbox etc.. )
    const googleStreets = L.tileLayer(
      'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
      { maxZoom: 20, subdomains: ['mt0', 'mt1', 'mt2', 'mt3'] }
    );

    googleStreets.addTo(this.map)

    // MARKER
    var markerIcon = L.icon({
      iconUrl: 'https://toppng.com/uploads/preview/in-location-map-icon-navigation-symbol-ma-google-maps-marker-blue-11562916561qaf3tyejum.png',
      iconSize: [50, 50],
      iconAnchor: [25, 50]
    })
    this.markerLokasi = L.marker([this.lat, this.lon], { icon: markerIcon })
    this.markerLokasi.addTo(this.map);

    this.markerTeman = L.marker([this.lat2, this.lon2], {icon: markerIcon})
    this.markerTeman.addTo(this.map);
  }

  getCoordinates() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
          this.lat = position.coords.latitude;
          this.lon = position.coords.longitude;
          // this.initializeMap()
          if (!this.isInit) {
            this.initializeMap()
            this.isInit = true
            this.startTimer()
          }
          else {
            this.moving()
          }
        },
        (error) => {
          console.error('Error getting location', error);
        }
      );
    } else {
      console.error('Geolocation is not supported in this browser.');
    }
  }

}
