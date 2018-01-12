import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '../forms/forms.module'
import { SkyCommonsModule } from '../sky-commons/sky-commons.module';

/** Components **/
import { HomeComponent } from './home.component';
import { ContactComponent } from './contact/contact.component'
import { DescriptionComponent } from './description/description.component';
import { QuotesComponent } from './quotes/quotes.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    SkyCommonsModule
  ],
  declarations: [HomeComponent, ContactComponent, DescriptionComponent, QuotesComponent, ServicesComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
