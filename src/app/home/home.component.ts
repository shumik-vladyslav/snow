import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private router: Router){

  }

  leftMenu = {
    title: "SNOWBOARD",
    data:[
    {
      name: "Parallel	Giant	Slalom",
      color: "blue",
      sport: "SBD",
      discipline: "PGS"
    },
    {
      name: "Parallel	Slalom",
      color: "purple",
      sport: "SBD",
      discipline: "PSL"
    },
    {
      name: "Snowboard	Cross",
      color: "red",
      sport: "SBD",
      discipline: "SBX"
    },
    {
      name: "Slope	Style",
      color: "green",
      sport: "SBD",
      discipline: "SS-"
    },
  ]};

  rightMenu = {
    title: "FREESTYLE	SKI",
    data:[
      {
        name: "Ski	Cross",
        color: "bluers",
        sport: "FRS",
        discipline: "SX-"
      },
      {
        name: "Slope	Style",
        color: "orange",
        sport: "FRS",
        discipline: "SS-"
      }
    ]};

  select(item){
    this.router.navigate(['/genders', item.sport, item.discipline]);
  }
}
