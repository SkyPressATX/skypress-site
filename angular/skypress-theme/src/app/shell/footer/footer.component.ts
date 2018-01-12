import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sky-footer',
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
            <span class="navbar-text">SkyPress LLC 2017</span>
            <div class="navbar-nav ml-auto">
                <a class="nav-item nav-link" target="_blank" href="//twitter.com/SkyPressATX"><i class="ion ion-social-twitter"></i></a>
                <a class="nav-item nav-link" target="_blank" href="//www.facebook.com/SkyPressATX"><i class="ion ion-social-facebook"></i></a>
                <a class="nav-item nav-link" target="_blank" href="//github.com/SkyPressATX"><i class="ion ion-social-github"></i></a>
            </div>
        </div>
    </nav>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
