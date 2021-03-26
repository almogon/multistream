import {Component, OnInit} from '@angular/core';
import {FrameType} from '../shared/enums/frame-type.enum';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // @ts-ignore
  frameObserver: BehaviorSubject<FrameType[]> = new BehaviorSubject([]);
  parFramesList: any[] = [];
  firstIteration = true;

  constructor() {
    this.firstIteration = true;
    this.frameObserver.next([]);
  }

  ngOnInit(): void {
    this.frameObserver.subscribe(frames => {
      let auxList: any[] = [];
      this.parFramesList = [];
      frames.forEach((value, index) => {
        auxList.push(value);
        if ((index + 1) % 2 === 0 && auxList.length > 0) {
          this.parFramesList.push(auxList);
          auxList = [];
        }
      });
      if (auxList.length) {
        const toPush = auxList[0] === FrameType.BOX ? auxList : auxList.concat(FrameType.BOX);
        this.parFramesList.push(toPush);
      }
    });
  }

  addFirstElement(): void {
    this.firstIteration = false;
    this.frameObserver.next([FrameType.TWITCH, FrameType.BOX]);
  }

  channelLoaded(): void {

  }

  addOtherFrame(): void {
    const frameList: FrameType[] = this.frameObserver.getValue();
    frameList[frameList.length - 1] = FrameType.TWITCH;
    frameList.push(FrameType.BOX);
    this.frameObserver.next(frameList);
  }

  removeChannel(index: number): void {
    const frameList: FrameType[] = this.frameObserver.getValue();
    frameList.slice(index, index + 1);
    this.frameObserver.next(frameList);
  }

  isTwitch(type: FrameType): boolean {
    return type === FrameType.TWITCH;
  }

  isBox(type: FrameType): boolean {
    return type === FrameType.BOX;
  }

  isEmpty(type: FrameType): boolean {
    return type === FrameType.EMPTY;
  }
}
