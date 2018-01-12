import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'sky-input',
  template: `
    <div class="{{class.group}}" [formGroup]="group">
        <label class="{{class.label}}" for="{{fieldId}}">{{param.name | titlecase}}</label>
        <input type="text" class="{{class.control}}" id="{{fieldId}}" [formControlName]="param.name">
    </div>
  `,
  styles: []
})
export class InputComponent implements OnInit {
    param;
    group: FormGroup;
    style?: string;
    class: any;

    fieldId: string;

    ngOnInit(){
        this.fieldId = this.param.name + '_' + Math.random();
        if( ! this.style || this.style === 'default' ){
            this.class = {
                group: "form-group",
                label: "col-form-label",
                control: "form-control"
            };
        }
    }
}
