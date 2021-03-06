import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Subject} from "rxjs";

@Injectable()
export class DataService {

  public headerText: Subject<any> = new Subject<any>();

  private url = 'http://sbdcis.westeurope.cloudapp.azure.com/api/';  // URL to web API
  constructor (private http: Http) {}

  getResult(discipline, sport, gender, phase, heat, run){
    return this.http.get(this.url + `getResult/${sport}/${discipline}/${gender}/${phase}/${heat}/${run}`)
      .map(res => res.json())
  }

  getStartlist(discipline, sport, gender, phase, heat, run){
    return this.http.get(this.url + `getStartlist/${sport}/${discipline}/${gender}/${phase}/${heat}/${run}`)
      .map(res => res.json())
  }

  getBracket(sport, discipline, gender){
    return this.http.get(this.url + `getBracket/${sport}/${discipline}/${gender}/`)
      .map(res => res.json())
  }

  getButtons(sport, discipline, gender, phase){
      // return this.http.get(this.url + `getSchedule/${sport}/${discipline}/${gender}/${phase}`)
    return this.http.get(this.url + `getPhaseButtons/${sport}/${discipline}/${gender}/${phase}`)
      .map(res => res.json())
  }
}
