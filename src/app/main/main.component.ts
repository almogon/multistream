import {Component,  OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  firstIteration = true;
  showAddMore = false;

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
    }
  }

  removeChannel(element: any): void {
      console.log(element);
  }

  getShowBox(): boolean {
    return this.showAddMore;
  }
}
