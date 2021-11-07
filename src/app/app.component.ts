import {Component, OnInit} from '@angular/core';
import {DisplayInfoService} from "./display-info.service";
import {DisplayMenuService} from "./display-menu.service";
import {animate, state, style, transition, trigger} from "@angular/animations";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut',[
      state('open', style({
        transform: 'translateX(0%)'
      })),
      state('closed', style({
        transform: 'translateX(-100%)'
      })),
      transition('closed <=> open', animate(2000))
    ])
  ]
})


export class AppComponent implements OnInit{
  title = 'CV';
  isOpen = false;
  izOpen = false;
  izOpen2 = false;
  isOpen2 = false;
  Sidebar = 'closed';



 constructor(private displayinfoService:DisplayInfoService, private displaymenuService: DisplayMenuService) {
 }

  ngOnInit(): void {
  this.displayinfoService.isOpen.subscribe(value => this.isOpen = value)
  this.displayinfoService.isOpen.subscribe(value => this.isOpen2 = value)
  this.displaymenuService.isOpen.subscribe(value => this.izOpen = value)
  this.displaymenuService.isOpen.subscribe(value => this.izOpen2 = value)
  }
}

