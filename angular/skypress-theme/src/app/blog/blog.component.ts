import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sky-blog',
  template: `
    <sky-splash
        [mainText]="featured.mainText"
        [subText]="featured.subText"
        [btnHref]="featured.btnHref"
        [btnText]="featured.btnText"
    ></sky-splash>
  `,
  styles: []
})
export class BlogComponent implements OnInit {

    featured: any;

  constructor() { }

  ngOnInit() {
      this.featured = {
          mainText: "Featured Article",
          subText: "This is a snippet from my featured article",
          btnHref: "#",
          btnText: "Read More"
      }
  }

}
