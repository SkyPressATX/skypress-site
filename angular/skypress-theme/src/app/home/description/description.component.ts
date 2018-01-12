import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sky-description',
  template: `
      <div class="container-fluid swatch-300 text-center py-5">
          <div class="mv-5 container">
              <p class="lead">{{shortDescription}}</p>
          </div>
      </div>
  `,
  styles: []
})
export class DescriptionComponent implements OnInit {

    shortDescription: string;


  constructor() { }

  ngOnInit() {
      this.shortDescription = 'SkyPress is a creative development agency crafting custom web applications in WordPress. Our team assists clients from concept strategy to architecture development, design, and operation. SkyPress maintains the WAR MVC framework and provides consultation to developers and businesses on projects using the WAR framework.'
  }

}
