import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {GendersComponent} from "./genders/genders.component";
import {ResultsComponent} from "./results/results.component";
import {BracketComponent} from "./bracket/bracket.component";


export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'genders/:sport/:discipline', component: GendersComponent },
  { path: 'results/:sport/:discipline/:gender/:phase/:heat/:run', component: ResultsComponent },
  { path: 'bracket/:sport/:discipline/:gender/:phase', component: BracketComponent },

];

