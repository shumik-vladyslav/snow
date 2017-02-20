import {Component, ApplicationRef} from '@angular/core';
import {Router, Params, ActivatedRoute} from "@angular/router";
import {DataService} from "../shared/service/data.service";
import {$WebSocket} from 'angular2-websocket/angular2-websocket'
import {Names} from "../shared/enum/enum";
declare var io;
var socket = io('ws://sbdcis.westeurope.cloudapp.azure.com');
socket.on('connect', function(){
});


socket.on('disconnect', function(){
  console.log(13)
});

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

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService,
  private applicationRef:ApplicationRef ){

    route.params.subscribe((params: Params) => {
      this.discipline = params['discipline'];
      this.sport = params['sport'];
      this.gender = params['gender'];
      this.phase = params['phase'];
      this.heat = params['heat'];
      this.run = params['run'];
      // this.title = Names[this.sport] + " : " + Names[this.discipline]
      dataService.headerText.next(Names[this.sport] + " " + Names[this.discipline] + " " + Names[this.gender]+ " - " + Names[this.phase]);

    });

    // this.getResult();
    // this.getStartlist();
    this.getButtons();

    socket.on("result", (key) => {
      console.log(13,key);
      if(key['Type'] === 'STARTLIST'){
        this.getStartlist(key);
      }else{
        this.getResult(key);
      }

    });
  }

  buttonsResults = [];
  buttonsStartlist = [];
  showError = false;

  getButtons(){
    this.dataService.getButtons(this.sport, this.discipline, this.gender, this.phase).subscribe((data) => {
      console.log(data)
      for(let item of data){
        if(item['Type'] === 'STARTLIST'){
          this.buttonsStartlist.push(item);
        }else{
          this.buttonsResults.push(item);
        }
      }
      this.showError = false;

    }, () => this.showError = true )
  }


  getResult(key){
   console.log(key)
    this.startList = null;
    this.dataService.getResult(key.discipline, key.sport, key.gender, key.phase, key.heat, key.run).subscribe((data) => {
      this.result = data;
      console.log(data, this.result)
      this.showError = false;
      this.applicationRef.tick();
    }, () => this.showError = true)
  }

  getStartlist(key){
    console.log(key)

    this.result = null;
    this.dataService.getStartlist(key.discipline, key.sport, key.gender, key.phase, key.heat, key.run).subscribe((data) => {
      this.startList = data;
      // console.log(data.json())
      console.log(data, this.startList)

      this.showError = false;
      this.applicationRef.tick();
    }, () => this.showError = true)
  }

  low(key){
    return key.toLowerCase();
  }
}
