import { Component, OnInit } from '@angular/core';
import {faChevronDown, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-menu-portfolio',
  templateUrl: './menu-portfolio.component.html',
  styleUrls: ['./menu-portfolio.component.scss'],
  animations:[
    trigger("openClose", [
     transition(":enter", [
        style({
          transform: "rotate(0)"
        }),
        animate("200ms ease-out", style({
          transform: "rotate(0)"
        }))
      ]),
      transition(":leave", [
        style({
          transform: "rotate(-90deg)"
        }),
        animate("200ms ease-out", style({
          transform: "rotate(-90deg)"
        }))
      ])
    ])

  ]
})
export class MenuPortfolioComponent implements OnInit {
  fachevronright = faChevronRight;
  fachevrondown = faChevronDown;
  dropDown = false;

toggle(){
  this.dropDown = !this.dropDown;
}


  constructor() { }


  ngOnInit(): void {
    // this.dropDown = !this.dropDown
  }

}
