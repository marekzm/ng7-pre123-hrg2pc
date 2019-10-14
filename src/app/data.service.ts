import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {



 constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get
    ('https://reqres.in/api/users')
    };

   // return this.http.get(' //https://api.oceandrivers.com:443/v1.0/getWeatherDisplay/bratislava/?period=latestdata')}

   

  firstClick() {
    return console.log('clicked');
  }


}
