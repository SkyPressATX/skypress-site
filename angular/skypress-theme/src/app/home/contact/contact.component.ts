import { Component, OnInit } from '@angular/core';
import { WpClientService } from '@skypress/wp-client';

@Component({
  selector: 'sky-contact',
  template: `
    <div id="contact-form" class="container-fluid py-5 text-white bg-primary">
        <div class="container">
            <div class="row mx-0 justify-content-center">
                <div class="col col-lg-8">
                    <div *ngIf="map && newForm">
                        <p class="lead">Tell us about your project</p>
                        <sky-forms [map]="map" [model]="model" (submitted)="save($event)"></sky-forms>
                    </div>
                    <div *ngIf="! newForm && ! error" class="alert alert-primary" role="error">
                        Thank you so much, we will be in contact soon!
                    </div>
                    <div *ngIf="error" class="alert alert-danger" role="alert">{{error}}</div>
                </div>
            </div>
        </div>
    </div>
  `,
  styles: []
})
export class ContactComponent implements OnInit {

    map: any;
    model: any = [];
    newForm: any = true;
    error: any;

  constructor( private wpClient: WpClientService ) { }

  ngOnInit() {
      this.wpClient.namespace().get( 'messages', { _schema: true } )
        .subscribe(
            resp => { this.map = resp; },
            err => { console.log( err ); }
        );
  }

  save( value ){
      if( value.error ){
          this.error = value.error;
          return;
      }
      this.wpClient.namespace().post( 'messages', value )
        .subscribe(
            resp => {
                this.newForm = false;
                if( this.error ) this.error = false;
                console.log( resp );
            },
            error => {
                this.error = error.error.message;
                console.log( error );
            }
        )
  }

}
