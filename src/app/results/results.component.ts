import {Component} from '@angular/core';
import {Router, Params, ActivatedRoute} from "@angular/router";
import {DataService} from "../shared/service/data.service";
import {$WebSocket} from 'angular2-websocket/angular2-websocket'
var ws = new $WebSocket("ws://sbdcis.westeurope.cloudapp.azure.com");
ws.onMessage(
  (msg: MessageEvent)=> {
    console.log("onMessage ", msg.data);
  },
  {autoApply: false}
);

@Component({
  selector: 'results',
  styleUrls: ['./results.component.css'],
  templateUrl: './results.component.html'
})
export class ResultsComponent {

  startListOptions = {
    "StartOrder": "Start Order",
    "BIB": "BIB",
    "Name": "Name",
    "NOC": "Country"
  };

  resultOptions = {
    "RankOrder": "Rank Order",
    "BIB": "BIB",
    "Name": "Name",
    "NOC": "Country",
    "Results1": "Results",
    "Results2": "Results",
    "Result": "Result",
    "Diff": "Diff"
  };

  startList;

  result;

  discipline;

  sport;

  gender;

  phase;

  heat;

  run;

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService){

    route.params.subscribe((params: Params) => {
      this.discipline = params['discipline'];
      this.sport = params['sport'];
      this.gender = params['gender'];
      this.phase = params['phase'];
      this.heat = params['heat'];
      this.run = params['run'];
      // this.title = Names[this.sport] + " : " + Names[this.discipline]

    });

    // this.getResult();
    // this.getStartlist();
    this.getButtons();
  }

  buttonsResults = [];
  buttonsStartlist = [];

  getButtons(){
    this.dataService.getButtons(this.sport, this.discipline, this.gender, this.phase).subscribe((data) => {
      console.log(data)
      for(let item of data){
        if(item['Status'] === 'SCHEDULED'){
          this.buttonsStartlist.push(item);
        }else{
          this.buttonsResults.push(item);
        }
      }

    })
  }


  getResult(key){
   console.log(key)
    this.startList = null;
    this.dataService.getResult(key.discipline, key.sport, key.gender, key.phase, key.heat, key.run).subscribe((data) => {
      this.result = data;
      console.log(data)
    })
  }

  getStartlist(key){
    this.result = null;
    this.dataService.getStartlist(key.discipline, key.sport, key.gender, key.phase, key.heat, key.run).subscribe((data) => {
      this.startList = data;
      // console.log(data.json())
    })
  }
}
