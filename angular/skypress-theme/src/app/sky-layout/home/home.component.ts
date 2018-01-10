import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sky-home',
  template: `
    <sky-splash></sky-splash>
    <sky-description></sky-description>
    <sky-services></sky-services>
    <sky-contact></sky-contact>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
