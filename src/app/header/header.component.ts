import {Component} from '@angular/core';
import {DataService} from "../shared/service/data.service";
declare var $:any;

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
    });
    $(window).scroll(function(){
      if ($(this).scrollTop() > 20) {
        $('#task_flyout').addClass('fixed');
      } else {
        $('#task_flyout').removeClass('fixed');
      }
    });
  }
}
