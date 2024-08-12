import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, repeat, take, takeUntil, tap, timer } from 'rxjs';

/**
 * 
 Assignment requirements
  
  Build an application to implement three lights: each lights has two colors. The are stay either in grey or the other color( e.g. red/grey, yellow/grey, and green/grey). First light stays 4 seconds as red and turn grey, then last one stays 4 seconds as green then turn grey, then the middle one stays 2 seconds as yellow and turns grey. The light changing is an infinite cycle. (see video attached). Reply your answer by this message.
  
  You can either use html + css or html + js to do this assignment.

https://www.evernote.com/shard/s546/client/snv?isnewsnv=true&noteGuid=6543d581-970f-c60f-2f52-4c3fd993a8b9&noteKey=wx6B2VCg7GqftKjJdxnSKj2CmEnTqrtOV5NruHmE94zG2h37I-8WFEJ1TQ&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs546%2Fsh%2F6543d581-970f-c60f-2f52-4c3fd993a8b9%2Fwx6B2VCg7GqftKjJdxnSKj2CmEnTqrtOV5NruHmE94zG2h37I-8WFEJ1TQ&title=traffic%2Blight
 * 
 */

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.scss'],
})
export class TrafficLightComponent implements OnInit, OnDestroy {
  timerStopper$: Subject<void> = new Subject();
  lightTimer$: Observable<number> = timer(0, 1000);
  activeColor: string;

  constructor() {}

  ngOnInit() {
    this.lightTimer$
      .pipe(
        take(11),
        tap((timer) => {
          console.log({
            timer,
          });
          switch (true) {
            case timer < 4:
              this.activeColor = 'red';
              break;
            case timer >= 4 && timer < 6:
              this.activeColor = 'yellow';
              break;
            case timer >= 6 && timer < 10:
              this.activeColor = 'green';
              break;
            case timer >= 10:
              console.log('stop');
              break;
          }
        }),
        repeat(),
        takeUntil(this.timerStopper$)
      )
      .subscribe();
  }

  stopTimer() {
    this.timerStopper$.next();
    this.timerStopper$.complete();
  }

  ngOnDestroy() {
    this.stopTimer();
  }
}
