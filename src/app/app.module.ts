import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from "angular2-materialize";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImportSuggestionComponent } from "./importSuggestion/importSuggestion.component";
import { ItemSearchComponent } from './interestingItems/itemSearch.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImportSuggestionComponent,
    ItemSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
