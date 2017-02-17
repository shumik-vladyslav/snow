import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  private url = 'http://sbdcis.westeurope.cloudapp.azure.com/api/';  // URL to web API
  constructor (private http: Http) {}

  getResult(discipline, sport, gender, phase, heat, run){
    return this.http.get(this.url + `getResult/${sport}/${discipline}/${gender}/${phase}/${heat}/${run}`)
  }

  getStartlist(discipline, sport, gender, phase, heat, run){
    return this.http.get(this.url + `getStartlist/${sport}/${discipline}/${gender}/${phase}/${heat}/${run}`)
  }

  getBracket(sport, discipline, gender){
    return this.http.get(this.url + `getBracket/${sport}/${discipline}/${gender}`)
  }
}
