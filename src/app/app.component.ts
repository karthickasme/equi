import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'flexproject';
  mediaSub: Subscription;
  cdevice: boolean;
  constructor(public mediaObserver: MediaObserver)
  {

  }
  ngOnInit()
  {
this.mediaSub = this.mediaObserver.media$.subscribe((result: MediaChange) => {
console.log(result.mqAlias);
this.cdevice = result.mqAlias === 'xs' ? true : false;
} );
  }
  ngOnDestroy()
  {
    this.mediaSub.unsubscribe();
  }
}
