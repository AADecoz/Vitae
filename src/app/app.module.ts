import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule, FaIconLibrary} from "@fortawesome/angular-fontawesome";
import { NavbarComponent } from './navbar/navbar.component';
import { InfoSidebarComponent } from './info-sidebar/info-sidebar.component';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';
import { MainComponent } from './main/main.component';
// import {faEllipsisV} from "@fortawesome/free-solid-svg-icons";

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // library.addIcons(faEllipsisV);
  }
}
