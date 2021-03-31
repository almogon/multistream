import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CommonsService} from '../shared/services/commons.service';
declare const Twitch: any;

@Component({
  selector: 'app-frame-twitch',
  templateUrl: './frame-twitch.component.html',
  styleUrls: ['./frame-twitch.component.css']
})
export class FrameTwitchComponent implements OnInit {
  frameFormControl = new FormGroup({
    channel: new FormControl(),
    id: new FormControl()
  });
  videoIsReady = false;
  loading = false;
  twitchLink: string | undefined;

  @Input() width: number | undefined;
  @Input() height: number | undefined;
  @Input() id: number | undefined;
  @Output() channelLoadedEvent = new EventEmitter<void>();
  @Output() removeChannelEvent = new EventEmitter<void>();
  @Output() cleanChannelEvent = new EventEmitter<void>();

  @ViewChild('twitchEmbed') frame: ElementRef | undefined;

  constructor(private commons: CommonsService) { }

  ngOnInit(): void {
    if (this.id && !this.frameFormControl.value.id) {
      this.frameFormControl.patchValue({
        id: this.id
      });
    }
  }

  showVideo(twitchEmbed: HTMLDivElement): void {
    this.loading = true;
    const channel = this.frameFormControl.value.channel;
    this.twitchLink = this.commons.getLinkTwitchChannel(channel).toString();
    const embed = new Twitch.Embed( twitchEmbed, {
      channel,
      width: this.width || 854, // 854
      height: this.height || 480, // 480
      muted: true,
      autoplay: true,
      layout: 'video'
    });
    embed.addEventListener(Twitch.Player.READY, () => {
      this.videoIsReady = true;
      this.loading = false;
      this.channelLoadedEvent.emit();
    });
  }

  cleanChannel(twitchEmbed: HTMLDivElement): void {
    this.frameFormControl.patchValue({
      channel: ''
    });
    this.videoIsReady = false;
    this.loading = false;
    twitchEmbed.innerHTML = '';
    this.twitchLink = undefined;
    this.cleanChannelEvent.emit();
  }

  removeChannel(): void {
    this.removeChannelEvent.emit();
  }
}
