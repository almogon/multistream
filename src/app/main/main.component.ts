import {Component,  OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  firstIteration = true;

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
  }

  addOtherFrame(): void {
    if (this.twitch) {
      this.columns?.createEmbeddedView(this.twitch);
    }
  }

  removeChannel(): void {

  }
}
