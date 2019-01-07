import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import{map} from 'rxjs/operators';
/*
  Generated class for the ConsumeApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ConsumeApiProvider {
  constructor(public http: HttpClient) {
    console.log('Hello ConsumeApiProvider Provider');
  }

  lista() {
 //   return this.http.get('https://restcountries.eu/rest/v2/all')
   //                 .pipe(map((data: any) => 
     //                 data.Json()));             
  }

  


}
