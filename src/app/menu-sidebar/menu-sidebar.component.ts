import {Component, Input, OnInit} from '@angular/core';
import {faCheckSquare, faFilePdf} from "@fortawesome/free-regular-svg-icons";
import {DisplayMenuService} from "../display-menu.service";

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {




  @Input()isOpen = false;
  fCheckSquare = faCheckSquare;
  fFilePDF=faFilePdf

  constructor(private displaymenuService: DisplayMenuService) {

  }

  ngOnInit(): void {
    this.displaymenuService.isOpen2
      .subscribe((isOpen:boolean) => {
        this.isOpen = isOpen;
      })

  }

  onClose(){
    this.displaymenuService.close();
  }

}
