import { Component, OnInit } from '@angular/core';
import {AngularTypewriterEffectModule, TypewriterComponent} from "angular-typewriter-effect";
TypewriterComponent


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  list = ['AngularTypewriter effect','Hello World....']








  constructor() { }

  ngOnInit(): void {}


}
