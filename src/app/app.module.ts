import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrameContainerComponent } from './frame-container/frame-container.component';
import { FrameTwitchComponent } from './frame-container/twitch/frame-twitch.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameContainerComponent,
    FrameTwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
