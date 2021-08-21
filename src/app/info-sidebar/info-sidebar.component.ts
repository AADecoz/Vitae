import {Component, Input, OnInit} from '@angular/core';
import {faCheckSquare} from "@fortawesome/free-regular-svg-icons";
import {DisplayInfoService} from "../display-info.service";

@Component({
  selector: 'app-info-sidebar',
  templateUrl: './info-sidebar.component.html',
  styleUrls: ['./info-sidebar.component.scss']
})


export class InfoSidebarComponent implements OnInit {

  @Input()isOpen = false;
  fCheckSquare = faCheckSquare;

  constructor(private displayinfoService: DisplayInfoService) {

  }

  ngOnInit(): void {
    this.displayinfoService.isOpen
      .subscribe((isOpen:boolean) => {
        this.isOpen = isOpen;
      })

  }

  onClose(){
    this.displayinfoService.close();
  }

}
