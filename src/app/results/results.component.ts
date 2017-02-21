import {Component, ApplicationRef} from '@angular/core';
import {Router, Params, ActivatedRoute} from "@angular/router";
import {DataService} from "../shared/service/data.service";
import {$WebSocket} from 'angular2-websocket/angular2-websocket'
import {Names} from "../shared/enum/enum";
declare var io;


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
    "Blue": "Blue",
    "Red": "Red",
    // "Results1": "Results",
    // "Results2": "Results",
    "Result": "Result",
    "Diff": "Diff"
  };

  GridConfig;

  startList;

  result;

  discipline;

  sport;

  gender;

  phase;

  heat;

  run;

  data;
  store;

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


      // this.dataService.getStartlist(this.discipline, this.sport, this.gender, this.phase, this.heat, this.run).subscribe((data) => {
      //   this.store = data;
      // })
      });

    // this.getResult();
    // this.getStartlist();
    this.getButtons();

    var socket = io('ws://sbdcis.westeurope.cloudapp.azure.com');
    socket.on('connect', function(){
    });


    socket.on('disconnect', function(){
      console.log(13)
    });

    socket.on("result", (key) => {
      console.log(13,key);
      if(key['sport'] === this.sport &&
        key['discipline'] === this.discipline &&
        key['gender'] === this.gender &&
        key['phase'] === this.phase )
      if(key['Type'] === 'STARTLIST'){
        this.getStartlist(key);
      }else{
        this.getResult(key);
      }

    });

    socket.on("current", (key) => {
      console.log(13,key);
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


  getResult(key, item?){
    if(item){
      this.GridConfig = item["GridConfig"];
      this.active(item);
    }
    console.log(key)
    this.result = null;
    this.startList = null;
    this.data = null;

    this.dataService.getResult(key.discipline, key.sport, key.gender, key.phase, key.heat, key.run).subscribe((data) => {
      this.result = data;
      this.data = data;
      console.log(data, this.result)
      this.showError = false;
      this.applicationRef.tick();
    }, () => this.showError = true)
  }

  getStartlist(key, item?){
    if(item){
      this.GridConfig = item["GridConfig"];
      this.active(item);
    }
    console.log(key)

    this.result = null;
    this.startList = null;
    this.data = null;

    this.dataService.getStartlist(key.discipline, key.sport, key.gender, key.phase, key.heat, key.run).subscribe((data) => {
      this.startList = data;
      this.data = data;

      // console.log(data.json())
      console.log(data, this.startList)

      this.showError = false;
      this.applicationRef.tick();
    }, () => this.showError = true)
  }

  low(key){
    return key.toLowerCase();
  }

  active(item){
    for(let item of this.buttonsResults){
      item.Active = false
    }
    for(let item of this.buttonsStartlist){
      item.Active = false
    }
    item["Active"] = true;
  }

}
