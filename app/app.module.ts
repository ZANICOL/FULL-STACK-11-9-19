import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DvdListComponent } from './dvd-list/dvd-list.component';
import { PmStarComponent } from './pm-star/pm-star.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule  ],
  declarations: [ AppComponent, HelloComponent, DvdListComponent, PmStarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
