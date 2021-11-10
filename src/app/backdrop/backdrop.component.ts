import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {DisplayMenuService} from "../display-menu.service";
import {DisplayInfoService} from "../display-info.service";

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss'],
  animations:[
    trigger("fadeInOut", [
      transition(':leave', [
        style({
          opacity: 0.5
        }),
        animate(500, style({
          opacity: 0
        }))
      ]),
      transition(":enter", [
        style({
          opacity: 0
        }),
        animate(500, style({
          opacity: 0.5
        }))
      ])
    ])

  ]
})
export class BackdropComponent implements OnInit {


  constructor(private displaymenuService: DisplayMenuService) {

  }

  onClose(){
    this.displaymenuService.close()
  }


  ngOnInit(): void {
  }

}
