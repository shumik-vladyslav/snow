import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home/home.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import {ButtonModule} from 'primeng/primeng';
import {GendersComponent} from "./genders/genders.component";
import {ResultsComponent} from "./results/results.component";
import {BracketComponent} from "./bracket/bracket.component";
import {DataService} from "./shared/service/data.service";
import {KeysPipe} from "./shared/pipe/keys.pipe";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GendersComponent,
    ResultsComponent,
    BracketComponent,
    KeysPipe,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    ButtonModule
  ],
  providers: [
    DataService
  ],
  exports: [KeysPipe],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
