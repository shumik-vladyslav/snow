import {Component} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {DataService} from "../shared/service/data.service";

@Component({
  selector: 'bracket',
  styleUrls: ['./bracket.component.sass'],
  templateUrl: './bracket.component.html'
})
export class BracketComponent {
  sport;
  discipline;
  gender;

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService){
    route.params.subscribe((params: Params) => {
      this.sport = params['sport'];
      this.discipline = params['discipline'];
      this.gender = params['gender'];
      // this.title = Names[this.sport] + " : " + Names[this.discipline]
      this.getBracket();
    });
  }

  bracket = {};

  getBracket(){
    this.dataService.getBracket(this.sport, this.discipline, this.gender).subscribe((data) => {
      for(let item of data){
        console.log(item)
        switch (item["Code"]){
          case("8FNL"):
            console.log(item);
            this.bracket["8FNL"] = item;
            break;
          case("QFNL"):
            console.log(item);
            this.bracket["QFNL"] = item;
            break;
          case("SFNL"):
            console.log(item);
            this.bracket["SFNL"] = item;
            break;
          case("FNL"):
            console.log(item);
            this.bracket["FNL"] = item;
            break;
        }
      }
      if(this.bracket['8FNL']['Heat'][0]['Competitor'].length === 6){
        this.margin = 123;
        this.marginSemi = 53;
        this.fixMargin = 0
      }

      if(this.bracket['8FNL']['Heat'][0]['Competitor'].length === 2){
        this.margin = 30;
        this.marginSemi = 15;
        this.fixMargin = 0
      }
    })
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



  }

  low(key){
    if(key)
      return key.toLowerCase();
    else
      return "";
  }
}
