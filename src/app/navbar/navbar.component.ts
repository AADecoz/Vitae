import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {Injectable} from "@angular/core"
import {DisplayInfoService} from "../display-info.service";
import {DisplayMenuService} from "../display-menu.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

@Injectable({
  providedIn:'root'
})

// export SidebarOpen {
//
// }

export class NavbarComponent implements OnInit {
  // @output() toggle = new EventEmitter<void>();

  fEllipsis = faEllipsisV;
  fBars = faBars;
  fTimes = faTimes;

  isOpen = false;
  izOpen = false;

  toggle() {
    this.displayinfoService.open()
    // this.isOpen = !this.isOpen;
    // if (this.isOpen) {
    //   this.displayinfoService.open()
    // } else {
    //   this.displayinfoService.close()
    // }

  }
  toggle2() {
    this.displaymenuService.open()
    // this.izOpen = !this.izOpen;
    // if (this.izOpen) {
    //   this.displaymenuService.open()
    // } else {
    //   this.displaymenuService.close()
    // }
  }


  // private displayinfoService:DisplayInfoService;
  constructor(private displayinfoService: DisplayInfoService, private displaymenuService: DisplayMenuService) {
  // this.displayinfoService = DisplayInfoService;
  }

  ngOnInit(): void {
    this.displayinfoService.isOpen
      .subscribe((isOpen: boolean) => {
        this.isOpen = isOpen
      })
    this.displaymenuService.isOpen
      .subscribe((isOpen:boolean) => {
        this.isOpen = isOpen
      })
  }

}
