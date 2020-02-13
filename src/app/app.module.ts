import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {MutiplicationTableComponent} from './mutiplication-table/mutiplication-table.component'
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, MutiplicationTableComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
