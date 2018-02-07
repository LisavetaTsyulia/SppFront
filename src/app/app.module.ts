import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import { TestBdTableComponent } from './test-bd-table/test-bd-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NavbarCustomComponent } from './navbar-custom/navbar-custom.component';
import { TabsTablesComponent } from './tabs-tables/tabs-tables.component';

@NgModule({
  declarations: [
    AppComponent,
    TestBdTableComponent,
    NavbarCustomComponent,
    TabsTablesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
