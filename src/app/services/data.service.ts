import { getInstructionStatements } from '@angular/compiler/src/render3/view/util';
import { Injectable } from '@angular/core';
import { CityI} from '../models/model'


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cities: CityI[] = [
    {
      id:1,
      name: 'London'
    },
    {
      id:2,
      name: 'Toronto'
    },
    {
      id:3,
      name: 'Singapore'
    }
  ];


  getCities(): CityI[]  {
    return this.cities;
  }

  

  constructor() { }
}


