import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FrameTwitch } from '../shared/models/frame-twitch';

@Component({
  selector: 'app-frame-container',
  templateUrl: './frame-container.component.html',
  styleUrls: ['./frame-container.component.css']
})
export class FrameContainerComponent implements OnInit {

  public frames: FrameTwitch[] = [];
  public numberOfFrames = 0;
  private screenHeight: number | undefined;
  private screenWidth: number | undefined;


  constructor() { 
    this.onResize();
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
