import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

/** Sky Form Fields **/
import { InputComponent } from './input/input.component';
import { TextComponent } from './text/text.component';
import { EmailComponent } from './email/email.component';
import { DateComponent } from './date/date.component';
import { TimeComponent } from './time/time.component';
import { SelectComponent } from './select/select.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { NumberComponent } from './number/number.component';
import { FileComponent } from './file/file.component';
import { HoneyPotComponent } from './honey-pot/honey-pot.component';

/** Map our param.type to an actual Field Component **/
const components: any = {
    string: InputComponent,
    text: TextComponent,
    integer: NumberComponent,
    date: DateComponent,
    array: InputComponent,
    bool: CheckboxComponent,
    email: InputComponent,
    json: TextComponent,
    honeyPot: HoneyPotComponent
};

@Directive({
  selector: '[skyField]'
})
export class FieldDirective implements OnInit {

    /** @param: param: any | The parameters to structure this field **/
    @Input() param: any;
    /** @param: group: FormGroup | Parent Form Group **/
    @Input() group: FormGroup;
    /** @param: style?: string | Optional, pass a form layout style ( horizontal, inline, default|null ) **/
    @Input() style?: string;
    /** @param: component: any | Placeholder for the proper compoenent to be build onInit **/
    component: any;

  constructor(
      private resolver: ComponentFactoryResolver,
      private container: ViewContainerRef
  ) { }

  ngOnInit(){
      if( this.param.hide ) return;
      /** Get the proper component based on the param Type **/
      const comp: any = components[( this.param.type || 'string' ) ];
      /** Create a factory for that component **/
      const factory = this.resolver.resolveComponentFactory<any>( comp );

      /** Create the actual component using the factory **/
      this.component = this.container.createComponent( factory );
      /** Assign the instance of this component proper variables **/
      this.assignComponentInstanceValues();
  }

  ngOnChanges(){
      /** If an component has been created, apply any changes to its instance **/
      if( this.component ){
          this.assignComponentInstanceValues();
      }
  }

  assignComponentInstanceValues(){
      this.component.instance.param = this.param;
      this.component.instance.group = this.group;
      this.component.instance.style = this.style;
  }

}
