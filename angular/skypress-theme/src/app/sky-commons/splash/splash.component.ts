import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sky-splash',
  template: `
      <div class="stars py-5 bg-dark d-flex flex-column align-items-stretch">
          <div class="m-auto">
            <div class="m-5 text-center text-white">
              <img *ngIf="imgUrl" src="{{imgUrl}}" class="img-fluid">
              <h2 *ngIf="mainText" class="mt-5">{{mainText}}</h2>
              <h5 *ngIf="subText" class="mt-3">{{subText}}</h5>
            </div>
            <div *ngIf="btnText" class="my-5 text-center">
              <a *ngIf="btnHref" href="{{btnHref}}">
                <button type="button" class="btn btn-outline-light btn-lg">{{btnText}}</button>
              </a>
            </div>
          </div>
      </div>
  `,
  styles: []
})
export class SplashComponent implements OnInit {

    /** @param: imgUrl: string | The parameters to structure this field **/
    @Input() imgUrl: string;
    /** @param: mainText: string | The main text **/
    @Input() mainText: string;
    /** @param: subText: string | The sub text **/
    @Input() subText: string;
    /** @param: btnText: string | The text for the button **/
    @Input() btnText: string;
    /** @param: btnHref: string | The HREF for the button **/
    @Input() btnHref: string;

  constructor() { }

  ngOnInit() { }

}
