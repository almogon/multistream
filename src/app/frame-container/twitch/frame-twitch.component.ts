import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame-twitch',
  templateUrl: './frame-twitch.component.html',
  styleUrls: ['./frame-twitch.component.css']
})
export class FrameTwitchComponent implements OnInit {

  @Input() src: string | undefined;
  @Input() height: string | undefined;
  @Input() width: string | undefined;
  @Input() allowFullScreen: boolean | undefined;
  @Input() channelName: string | undefined;
  @Input() mute: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log("frame twitch displaying");
  }

}
