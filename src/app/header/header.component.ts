import {Component} from '@angular/core';
import {DataService} from "../shared/service/data.service";


@Component({
  selector: 'header',
  styleUrls: ['./header.component.sass'],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  text = "";

  constructor(private dataService: DataService){
    dataService.headerText.subscribe((data) => {
      this.text = data;
    })
  }
}
