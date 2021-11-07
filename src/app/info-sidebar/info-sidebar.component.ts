import {Component, Input, OnInit} from '@angular/core';
import {faCheckSquare, faFilePdf} from "@fortawesome/free-regular-svg-icons";
import {DisplayInfoService} from "../display-info.service";
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import {animate, style, transition, trigger} from "@angular/animations";


@Component({
  selector: 'app-info-sidebar',
  templateUrl: './info-sidebar.component.html',
  styleUrls: ['./info-sidebar.component.scss'],
  animations: [
    trigger("openClose", [
      transition(":enter", [
        style({
          transform: "translateX(-100%)"
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
          transform: "translate(-100%)"
        }))
      ])
    ])

  ]
})


export class InfoSidebarComponent implements OnInit {

  @Input()isOpen = false;
  fCheckSquare = faCheckSquare;
  fFilePDF=faFilePdf
  fEllipsis = faEllipsisV;


  toggle() {
    this.displayinfoService.close()
    // this.isOpen = !this.isOpen;
    // if (this.isOpen) {
    //   this.displayinfoService.open()
    // } else {
    //   this.displayinfoService.close()
    // }
  }


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
