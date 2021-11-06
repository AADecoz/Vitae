import {Component, OnInit} from '@angular/core';
import {DisplayInfoService} from "./display-info.service";
import {DisplayMenuService} from "./display-menu.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'CV';
  isOpen = false;
  izOpen = false;
  izOpen2 = false;
  isOpen2 = false;


 constructor(private displayinfoService:DisplayInfoService, private displaymenuService: DisplayMenuService) {
 }

  ngOnInit(): void {
  this.displayinfoService.isOpen.subscribe(value => this.isOpen = value)
  this.displayinfoService.isOpen.subscribe(value => this.isOpen2 = value)
  this.displaymenuService.isOpen.subscribe(value => this.izOpen = value)
  this.displaymenuService.isOpen.subscribe(value => this.izOpen2 = value)
  }
}

