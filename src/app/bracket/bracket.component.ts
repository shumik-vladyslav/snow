import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'bracket',
  styleUrls: ['./bracket.component.css'],
  templateUrl: './bracket.component.html'
})
export class BracketComponent {

  constructor(private router: Router){

  }

  fixMargin = 63;
  margin = 63;
  marginSemi = 0;
  data = [[
    {
      Position: "1",
      Result: "3",
      Color: "RED",
      Code: "9480252",
      Name: "Phillipp",
      Surname: "KIYANITSYN",
      Fullname: "KIYANITSYN Phillipp",
      NOC: "RUS",
      Birthdate: "1994-07-12",
      Bib: "16 G"
    },
    {
      Position: "2",
      Result: "1",
      Color: "GREEN",
      Code: "9150142",
      Name: "Daniel",
      Surname: "SYKORA",
      Fullname: "SYKORA Daniel",
      NOC: "CZE",
      Birthdate: "1994-07-08",
      Bib: "1 R"
    },
    {
      Position: "3",
      Result: "4",
      Color: "BLUE",
      Code: "9150143",
      Name: "Mark",
      Surname: "BOHUNEK",
      Fullname: "BOHUNEK Petr",
      NOC: "CZE",
      Birthdate: "1991-05-01",
      Bib: "32 Y"
    },
    {
      Position: "4",
      Result: "2",
      Color: "YELLOW",
      Code: "1774911",
      Name: "Timur",
      Surname: "GUBAEV",
      Fullname: "GUBAEV Timur",
      NOC: "KGZ",
      Birthdate: "1992-05-10",
      Bib: "17 BI"
    },






  ]]
  ngOnInit(){

    if(this.data[0].length === 6){
      this.margin = 123;
      this.marginSemi = 53;
      this.fixMargin = 0
    }

  }
}
