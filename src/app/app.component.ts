import {Component, OnInit} from '@angular/core';
import {DisplayInfoService} from "./display-info.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'CV';
  isOpen = false;
  isOpen2 = false;

 constructor(private displayinfoService:DisplayInfoService) {
 }

  ngOnInit(): void {
  this.displayinfoService.isOpen.subscribe(value => this.isOpen = value)
  this.displayinfoService.isOpen.subscribe(value => this.isOpen2 = value)
  }
}

