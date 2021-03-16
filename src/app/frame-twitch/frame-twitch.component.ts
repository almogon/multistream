import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
declare const Twitch: any;

@Component({
  selector: 'app-frame-twitch',
  templateUrl: './frame-twitch.component.html',
  styleUrls: ['./frame-twitch.component.css']
})
export class FrameTwitchComponent implements OnInit {
  frameFormControl = new FormGroup({
    channel: new FormControl()
  });
  videoIsReady = false;

  @ViewChild('twitchEmbed') frame: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
    this.frameFormControl.controls.channel.valueChanges.subscribe(value => {
      if (value !== '') {

      }
    });
  }

  showVideo(): void {
    const channel = this.frameFormControl.value.channel;
    const embed = new Twitch.Embed( this.frame?.nativeElement, {
      channel,
      width: 854,
      height: 480,
      muted: true,
      allowfullscreen: true,
      autoplay: true,
      layout: 'video'
    });
    embed.addEventListener(Twitch.Player.READY, () => {
      this.videoIsReady = true;
    });
  }


  cleanChannel(): void {
    this.frameFormControl.patchValue({
      channel: ''
    });
    this.frame?.nativeElement.remove();
    this.videoIsReady = false;
  }
}
