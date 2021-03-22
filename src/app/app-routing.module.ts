import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {OneScreenComponent} from './templates/one-screen/one-screen.component';
import {TwoScreenComponent} from './templates/two-screen/two-screen.component';
import {FourScreenMainComponent} from './templates/four-screen-main/four-screen-main.component';
import {MainComponent} from './main/main.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'template/main',
        component: OneScreenComponent
      },
      {
        path: 'template/split',
        component: TwoScreenComponent
      },
      {
        path: 'template/multi-main',
        component: FourScreenMainComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
