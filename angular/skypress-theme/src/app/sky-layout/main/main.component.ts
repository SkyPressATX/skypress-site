import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sky-main',
  template: `
    <div class="main d-flex flex-column align-items-stretch">
        <!--<sky-header [home]="false"></sky-header>-->
        <sky-content></sky-content>
        <sky-footer></sky-footer>
    </div>
  `,
  styles: [
      ':host, .main { height: 100%; }'
  ]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
