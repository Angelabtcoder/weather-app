import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey: string = '536b8b310783170eeaddc5912b880f24';
  URI: string = '';

  constructor(private http: HttpClient) { 

    this.URI = `https://api.openweathermap.org/data/2.5/forecast?appid=${this.apiKey}&units=metric&q=`;
  }

  getWeather(cityName: string) {
    return this.http.get(`${this.URI}${cityName}`);
  }

}
