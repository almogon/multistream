import {Component,  OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {FrameTwitchComponent} from '../frame-twitch/frame-twitch.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  firstIteration = true;
  showAddMore = false;
  idFrame = 0;

  @ViewChild('columns', { read: ViewContainerRef }) columns: ViewContainerRef | undefined;
  @ViewChild('twitch') twitch: TemplateRef<any> | undefined;

  constructor() {
    this.firstIteration = true;
  }

  ngOnInit(): void {
  }

  addFirstElement(): void {
    this.firstIteration = false;
    this.addOtherFrame();
  }

  channelLoaded(): void {
    this.showAddMore = true;
  }

  addOtherFrame(): void {
    if (this.twitch) {
      this.showAddMore = false;
      this.columns?.createEmbeddedView(this.twitch);
      this.idFrame++;
    }
  }

  removeChannel(element: HTMLDivElement): void {
      // element.hidden = true;
      element.parentElement?.removeChild(element);
      const allFrames = document.getElementById('frame');
      if (!allFrames) {
        this.firstIteration = true;
      }
  }
}
