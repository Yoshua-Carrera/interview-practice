import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tile } from './change-tile-color.models';
/**
 * 
  Assignment requirements

  Using the given data below to dynamically build an application in Angular (no hard code): there are a title and four sections. Each section has a paragraph and a button with a color. They are red, green, blue and orange.

  When a user clicks the button, the color of the title and the clicked section border will be changed to the corresponding button color. For example, if the user clicks the first button, the first section border will be red, and the title color will be red. If unclicked, it will be changed back to black(the original border color).
  
  Apply @Input and @Output for data communication between components.

  https://www.evernote.com/shard/s546/client/snv?isnewsnv=true&noteGuid=c513ffbc-1977-7951-783b-15af942c615e&noteKey=082aMmm625jpgG0G-NB69v2y1yqTosMj-dHjiYgZ2Ds4DdAcKt2REh2AyQ&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs546%2Fsh%2Fc513ffbc-1977-7951-783b-15af942c615e%2F082aMmm625jpgG0G-NB69v2y1yqTosMj-dHjiYgZ2Ds4DdAcKt2REh2AyQ&title=Change%2Btitle%2Bcolor
 * 
 */
@Component({
  selector: 'app-change-tile-color',
  templateUrl: './change-tile-color.component.html',
  styleUrls: ['./change-tile-color.component.scss'],
})
export class ChangeTileColorComponent implements OnInit {
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter();
  @Input() tile: Tile;

  constructor() {}

  ngOnInit() {}

  onclick(id: string) {
    this.buttonClicked.emit(id);
  }
}
