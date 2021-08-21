import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

class Subject {
  private subscribers: Function[] = [];
  subscribe (func: Function): void{
    this.subscribers.push(func);
  }

  next(value:any){
    for (const func of this.subscribers){
      func(value)
    }
  }
}
