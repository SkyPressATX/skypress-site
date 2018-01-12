import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/** Sky Forms **/
import { FieldDirective } from './field.directive';
import { FormsComponent } from './forms.component';

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


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
      FieldDirective,
      FormsComponent,
      InputComponent,
      TextComponent,
      EmailComponent,
      DateComponent,
      TimeComponent,
      SelectComponent,
      CheckboxComponent,
      RadioComponent,
      NumberComponent,
      FileComponent,
      HoneyPotComponent

  ],
  entryComponents: [
      InputComponent,
      TextComponent,
      EmailComponent,
      DateComponent,
      TimeComponent,
      SelectComponent,
      CheckboxComponent,
      RadioComponent,
      NumberComponent,
      FileComponent,
      HoneyPotComponent
  ],
  exports: [FormsComponent]
})
export class FormsModule { }
