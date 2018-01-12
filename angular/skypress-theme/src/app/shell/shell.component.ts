import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sky-shell',
  template: `
    <div class="main d-flex flex-column align-items-stretch">
        <!-- <sky-header></sky-header> -->
        <div class="mb-auto">
            <router-outlet></router-outlet>
        </div>
        <sky-footer></sky-footer>
    </div>
  `,
  styles: [
      ':host, .main { height: 100%; }'
  ]
})
export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
