import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonsService {

  constructor() { }

  getLinkTwitchChannel(channelName: string): string {
    const twitchLink = environment.twitchLink;
    return twitchLink.replace('{{channel}}', channelName);
  }
}
