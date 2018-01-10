import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sky-splash',
  template: `
      <div class="stars py-5 bg-dark d-flex flex-column align-items-stretch">
          <div class="m-auto">
            <div class="m-5 text-center text-white">
              <img src="/wp-content/uploads/2017/11/splash-trans-no-padding.png" class="img-fluid">
              <h2 class="mt-5">Aim for the stars</h2>
            </div>
            <div class="my-5 text-center">
              <a href="#contact-form">
                <button type="button" class="btn btn-outline-light btn-lg">Contact Us</button>
              </a>
            </div>
          </div>
      </div>
  `,
  styles: []
})
export class SplashComponent implements OnInit {

    companyName: string;
    companySlogan: string;

  constructor() { }

  ngOnInit() {
      this.companyName = 'SkyPress';
      this.companySlogan = 'Aim for the Stars';
  }

}
