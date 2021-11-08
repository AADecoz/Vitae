import { Component, OnInit } from '@angular/core';
import {AngularTypewriterEffectModule, TypewriterComponent} from "angular-typewriter-effect";
TypewriterComponent


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = 'CV';
  list = [
    'Eager to learn new methods, technologies and code',
    'Dedicated, driven and enthusiastic',
    'In search for opportunities']




  constructor() { }

  ngOnInit(): void {}


}
