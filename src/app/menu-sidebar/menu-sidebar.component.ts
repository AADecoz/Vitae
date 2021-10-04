import {Component, Input, OnInit} from '@angular/core';
import {faCheckSquare, faFilePdf} from "@fortawesome/free-regular-svg-icons";
import {DisplayInfoService} from "../display-info.service";

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {




  @Input()isOpen = false;
  fCheckSquare = faCheckSquare;
  fFilePDF=faFilePdf

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
