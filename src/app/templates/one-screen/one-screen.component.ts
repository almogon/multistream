import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {CommonsService} from '../../shared/services/commons.service';

@Component({
  selector: 'app-one-screen',
  templateUrl: './one-screen.component.html',
  styleUrls: ['./one-screen.component.css']
})
export class OneScreenComponent implements OnInit {

  channelName = new BehaviorSubject<string>('');
  twitchLink: string | undefined;

  constructor(
    private commonService: CommonsService
  ) {
    this.channelName.next('elmiillor');
  }

  ngOnInit(): void {
    this.channelName.subscribe(value => {
      this.twitchLink = this.commonService.getLinkTwitchChannel(value);
    });
  }

}
