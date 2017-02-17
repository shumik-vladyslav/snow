import {Component} from '@angular/core';
import {Router, Params, ActivatedRoute} from "@angular/router";
import {DataService} from "../shared/service/data.service";

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
    "Results": "Results",
    "Result": "Result"
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

    this.getResult();
    this.getStartlist();
  }

  getResult(){
    this.dataService.getResult(this.discipline, this.sport, this.gender, this.phase, this.heat, this.run).subscribe((data) => {
      this.result = data.json();
      console.log(data.json())
    })
  }

  getStartlist(){
    this.dataService.getStartlist(this.discipline, this.sport, this.gender, this.phase, this.heat, this.run).subscribe((data) => {
      this.startList = data.json();
      console.log(data.json())
    })
  }
}
