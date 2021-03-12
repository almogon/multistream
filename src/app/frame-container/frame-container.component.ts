import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FrameTwitch } from '../shared/models/frame-twitch';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-frame-container',
  templateUrl: './frame-container.component.html',
  styleUrls: ['./frame-container.component.css']
})
export class FrameContainerComponent implements OnInit {

  public frames: FrameTwitch[] = [];
  public numberOfFrames = 0;
  public templates : any;
  private screenHeight: number | undefined;
  private screenWidth: number | undefined;


  constructor() { 
    this.onResize();
    this.templates = environment.templates;
  }

  ngOnInit(): void {
    console.log("frame twitch container displaying");
  }

  addFrames(numberOfFrames: number) {
    this.numberOfFrames = numberOfFrames;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

}
