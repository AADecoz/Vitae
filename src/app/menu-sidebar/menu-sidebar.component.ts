import {Component, Input, OnInit} from '@angular/core';
import {faCheckSquare, faFilePdf} from "@fortawesome/free-regular-svg-icons";
import {DisplayMenuService} from "../display-menu.service";
import {animate, style, transition, trigger} from "@angular/animations";
import {faBars} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss'],
  animations: [
    trigger("openClose", [
      transition(":enter", [
        style({
          transform: "translateX(100%)"
        }),
        animate("200ms ease-out", style({
          transform: "translate(0)"
        }))
      ]),
      transition(":leave", [
        style({
          transform: "translateX(0)"
        }),
        animate("200ms ease-out", style({
          transform: "translate(100%)"
        }))
      ])
    ])

  ]
})
export class MenuSidebarComponent implements OnInit {

  @Input()isOpen = false;
  fCheckSquare = faCheckSquare;
  fFilePDF=faFilePdf;
  fBars = faBars;
  Sidebar=':leave';

  // toggle2() {
  //   this.isOpen = !this.isOpen;
  //   if (this.isOpen) {
  //     this.displaymenuService.open()
  //   } else {
  //     this.displaymenuService.close()
  //   }
  // }

  toggle(){
    this.displaymenuService.close()
  }

  constructor(private displaymenuService: DisplayMenuService) {

  }

  ngOnInit(): void {
    this.displaymenuService.isOpen
      .subscribe((isOpen:boolean) => {
        this.isOpen = isOpen;
      })

  }

  onClose(){
    this.displaymenuService.close();
  }

}
