import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {trigger, transition, state, animate, style} from "@angular/animations"
import {Injectable} from "@angular/core"
import {DisplayInfoService} from "../display-info.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('childAnimation', [
      // ...
      state('open', style({
        width: '290px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        width: '100px',
        opacity: 0.8,
        backgroundColor: '#c6ecff'
      })),
      transition('* => *', [
        animate('1s')
      ]),
    ]),
  ],
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
  toggle() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.displayinfoService.open()
    } else {
      this.displayinfoService.close()
    }
  }


  // private displayinfoService:DisplayInfoService;
  constructor(private displayinfoService: DisplayInfoService) {
  // this.displayinfoService = DisplayInfoService;
  }

  ngOnInit(): void {
    this.displayinfoService.isOpen
      .subscribe((isOpen: boolean) => {
        this.isOpen = isOpen
      })
  }

  onClose(){
    this.displayinfoService.close();
  }


}
