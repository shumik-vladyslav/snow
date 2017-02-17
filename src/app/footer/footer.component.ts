import {Component} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common'

@Component({
  selector: 'footer',
  styleUrls: ['./footer.component.sass'],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  constructor(private _location: Location) {
  }
  backClicked() {
    this._location.back();
  }
}
