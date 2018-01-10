import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sky-content',
  host: { class: "mb-auto" },
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
