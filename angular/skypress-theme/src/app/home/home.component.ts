import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sky-home',
  template: `
    <sky-splash
        [imgUrl]="splashConfig.img"
        [mainText]="splashConfig.main"
        [btnText]="splashConfig.btnText"
        [btnHref]="splashConfig.btnHref"
    ></sky-splash>
    <sky-description></sky-description>
    <sky-services></sky-services>
    <sky-contact></sky-contact>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  splashConfig: any;
  constructor() { }

  ngOnInit() {
      this.splashConfig = {
          img: "//skypress.io/wp-content/uploads/2017/11/splash-trans-no-padding.png",
          main: "Aim for the starts",
          btnText: "Contact Us",
          btnHref: "#contact-form"
      };
  }

}
