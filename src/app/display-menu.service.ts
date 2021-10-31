import { Injectable } from '@angular/core';
import { Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DisplayMenuService {

  private _isOpen = new Subject<boolean>();
  // constructor() { }

  get isOpen2(): Subject<boolean>{
    return this._isOpen;
  }

  open(){
    console.log("opening menu-sidebar")
    this._isOpen.next(true);
  }

  close(){
    this._isOpen.next(false);
  }
}
