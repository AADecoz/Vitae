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
import {AngularTypewriterEffectModule} from "angular-typewriter-effect";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MenuPortfolioComponent } from './menu-portfolio/menu-portfolio.component';
import { BackdropComponent } from './backdrop/backdrop.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InfoSidebarComponent,
    MenuSidebarComponent,
    MainComponent,
    MenuPortfolioComponent,
    BackdropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    AngularTypewriterEffectModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [DisplayInfoService],
  bootstrap: [AppComponent]
})



export class AppModule {


  constructor() {

  }
}
