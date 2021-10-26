import { Component, OnInit } from '@angular/core';
import {AngularTypewriterEffectModule, TypewriterComponent} from "angular-typewriter-effect";
TypewriterComponent


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  list = ['I learn...','I understand...','I utilise...']









  constructor() { }

  ngOnInit(): void {}


}
