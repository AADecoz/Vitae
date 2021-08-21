import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DisplayInfoService} from "./display-info.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { NavbarComponent } from './navbar/navbar.component';
import { InfoSidebarComponent } from './info-sidebar/info-sidebar.component';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InfoSidebarComponent,
    MenuSidebarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    // DisplayInfoService,
  ],
  providers: [DisplayInfoService],
  bootstrap: [AppComponent]
})



export class AppModule {


  constructor() {

  }
}
