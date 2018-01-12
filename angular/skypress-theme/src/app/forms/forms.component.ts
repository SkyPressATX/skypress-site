import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'sky-forms',
  template: `
    <form [formGroup]="group" (ngSubmit)="submitChanges(group.value)">
        <ng-container
            skyField
            *ngFor="let param of params"
            [param]="param"
            [group]="group"
            [style]="style"
        ></ng-container>
        <button class="btn btn-sm btn-light" type="submit">Submit</button>
    </form>
  `,
  styles: []
})
export class FormsComponent implements OnInit {

    @Input() map: any;
    @Input() model: any;
    @Input() style?: string;

    group: FormGroup;
    url_id_param: string;
    params: any[];

    @Output() submitted: EventEmitter<any> = new EventEmitter<any>();

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
      this.params = this.map.params ? this.parseModelParams( this.map.params ) : [];
      this.params.push( { name: 'honeyPot', type: 'honeyPot' } );
      this.url_id_param = this.map.url_id_param || 'id';
      this.group = this.createGroup();
  }

  parseModelParams( params?: any ){
      if( ! params ) return [];
      return Object.keys( params )
        .map( function( key ){
            return params[ key ];
        });
  }

  createGroup(){
      const group = this.formBuilder.group({});
      if( ! this.params ) return group;
      this.params.forEach( param => group.addControl( param.name, this.getControl( param ) ) );
      return group;
  }

  submitChanges( value ){
      if( value.honeyPot ) value = { error: 'No Bots Please' };
      if( ! value.honeyPot ) delete value.honeyPot;
      return this.submitted.emit( value );
  }

  getControl( param: any ){
      return param.required ? this.formBuilder.control( this.model[ param.name ], Validators.required ) : this.formBuilder.control( this.model[ param.name ] );
  }

}
