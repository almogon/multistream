import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-select-template',
  templateUrl: './select-template.component.html',
  styleUrls: ['./select-template.component.css']
})
export class SelectTemplateComponent implements OnInit {

  public templates: any;

  constructor(
    private router: Router
  ) {
    this.templates = environment.templates;
  }

  ngOnInit(): void {
  }

  navigateTo(url: string): void {
    this.router.navigate(['template/' + url]).then(r => {
      console.log('success');
    });
  }
}
