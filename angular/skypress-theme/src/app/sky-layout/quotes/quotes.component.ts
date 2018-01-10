import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sky-quotes',
  template: `
  <div class="container-fluid py-5 min-height-1 text-center swatch-200">
      <div class="conatiner">
          <p>quotes works!</p>
      </div>
  </div>
  `,
  styles: []
})
export class QuotesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
