import {Component} from '@angular/core';
import {ActivatedRoute, Router, Params} from "@angular/router";
import {Names} from "../shared/enum/enum";

@Component({
  selector: 'genders',
  styleUrls: ['./genders.component.css'],
  templateUrl: './genders.component.html'
})
export class GendersComponent {
  discipline = "";
  sport = "";

  title = "";

  constructor(private route: ActivatedRoute, private router: Router){
    route.params.subscribe((params: Params) => {
      this.discipline = params['discipline'];
      this.sport = params['sport'];

      this.title = Names[this.sport] + " : " + Names[this.discipline]

    });
  }

  leftMenu = {
    title: "Men",
    data:[
    {
      name: "Qualification",
      color: "blue",
      genders: "M",
      phase: "QUAL",
      heat: "----",
      run: "----"
    },
    {
      name: "Finals",
      color: "purple",
      genders: "M",
      phase: "FNL-"
    },
  ]};

  rightMenu = {
    title: "Ladies",
    data:[
      {
        name: "Qualification",
        color: "bluers",
        genders: "W",
        phase: "QUAL",
        heat: "----",
        run: "----"
      },
      {
        name: "Finals",
        color: "orange",
        genders: "W",
        phase: "FNL-"
      },
    ]};

  select(item){
    if(item.run){
      this.router.navigate(['/results', this.sport, this.discipline, item.genders, item.phase, item.heat, item.run]);
    }else {
      this.router.navigate(['/bracket', this.sport, this.discipline, item.genders, item.phase]);
    }
    console.log(item)
  }
}
