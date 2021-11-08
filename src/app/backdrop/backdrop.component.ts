import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

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

  constructor() { }

  ngOnInit(): void {
  }

}
