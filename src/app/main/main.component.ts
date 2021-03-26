import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  firstIteration = true;

  @ViewChild('columns') columns: ElementRef | undefined;
  @ViewChild('pairElement') pairElement: ElementRef | undefined;
  @ViewChild('twitch') twitch: ElementRef | undefined;
  @ViewChild('box') box: ElementRef | undefined;

  constructor(private renderer: Renderer2) {
    this.firstIteration = true;
  }

  ngOnInit(): void {
  }

  addFirstElement(): void {
    this.firstIteration = false;
    const pairElementAux: ElementRef | undefined = this.pairElement;
    const twitchBox = this.twitch?.nativeElement;
    this.renderer.addClass(twitchBox, 'd-flex');
    this.renderer.appendChild(pairElementAux?.nativeElement, twitchBox);

    const addMoreBox = this.box?.nativeElement;
    this.renderer.addClass(addMoreBox, 'd-flex');
    this.renderer.appendChild(pairElementAux?.nativeElement, addMoreBox);

    this.renderer.appendChild(this.columns?.nativeElement, pairElementAux?.nativeElement);
  }

  channelLoaded(): void {

  }

  addOtherFrame(): void {
  }

  removeChannel(): void {

  }


}
