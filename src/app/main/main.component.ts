import { Component } from '@angular/core';
import {FrameType} from '../shared/enums/frame-type.enum';

export interface BoxChannel {
  showTwitch: boolean;
  showAddMore: boolean;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  iframes: BoxChannel[] = [];
  firstIteration = true;

  constructor() {
    this.firstIteration = true;
  }

  addChannel(): void {
    this.firstIteration = false;
    this.iframes.push({
      showTwitch: true,
      showAddMore: false
    });
  }

  channelLoaded(index: number): void {
    this.iframes[index].showAddMore = true;
  }

  addOtherFrame(index: number): void {
    this.iframes[index].showAddMore = false;
    this.iframes.push({
      showTwitch: (index % 2 === 0),
      showAddMore: false
    });
  }
}
