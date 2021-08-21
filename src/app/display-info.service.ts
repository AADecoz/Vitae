import { Injectable } from '@angular/core';
import { Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DisplayInfoService {

  private _isOpen = new Subject<boolean>();
  // constructor() { }

  get isOpen(): Subject<boolean>{
    return this._isOpen;
  }

  open(){
    console.log("opening info-sidebar")
    this._isOpen.next(true);
  }

  close(){
    this._isOpen.next(false);
  }
}
