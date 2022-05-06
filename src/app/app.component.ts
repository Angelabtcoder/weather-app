import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { CityI} from './models/model';
import { DataService } from './services/data.service';
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  selectedCity: CityI = {id: 0, name: ''};
  cities: CityI[] = [];
  weatherList: any;
  temp: any;
  iconUrl: any;
   


  constructor( private weatherService: WeatherService,
               private dataService: DataService,
               public translate: TranslateService)
                 {
                   translate.addLangs(['en','es'])
                  translate.setDefaultLang('en');
                  const browserLang = translate.getBrowserLang();
                  translate.use('en');
             }

  ngOnInit(): void {
    
    
    this.weatherService.getWeather('london').subscribe(res => console.log(res), err => console.log(err));
    this.cities = this.dataService.getCities();
  }

  changeCity($event: Event) {
    this.weatherService.getWeather(this.selectedCity.name)
      .subscribe(
        res => {
          console.log(res);
          this.temp = res;
          let currentDate = this.temp.list[0].dt_txt.split(' ')[0];                                              
          this.weatherList = this.temp.list.filter((element:any) => element.dt_txt.split(' ')[0] == currentDate);
          console.log(this.weatherList);          
          let iconcode = this.weatherList[0].weather[0].icon;
          this.iconUrl = "http://openweathermap.org/img/wn/" + iconcode + ".png";
          console.log(this.iconUrl);
        },
        err => console.log(err)
      )

     


  }

  
  
  
}
  
 

