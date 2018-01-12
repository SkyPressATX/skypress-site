import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'sky-honey-pot',
  template: `
    <div id="honeypot" class="invisible" [formGroup]="group">
        <input type="text" class="invisible" [formControlName]="param.name">
    </div>
  `,
  styles: [ '#honeypot{ height: 0px };' ]
})
export class HoneyPotComponent implements OnInit {
    param;
    group: FormGroup;
    style?: string;

    ngOnInit(){
    }
}
