import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
