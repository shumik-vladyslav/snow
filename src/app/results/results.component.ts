import {Component} from '@angular/core';
import {Router} from "@angular/router";
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

  startList;

  result;

  constructor(private router: Router, private dataService: DataService){
    this.getResult();
    this.getStartlist();
  }

  getResult(){
    this.dataService.getResult().subscribe((data) => {
      this.result = data.json();
      console.log(data.json())
    })
  }

  getStartlist(){
    this.dataService.getStartlist().subscribe((data) => {
      this.startList = data.json();
      console.log(data.json())
    })
  }
}
