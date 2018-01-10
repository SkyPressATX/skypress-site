import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/** SkyPress NG Bootstrap Form Builder **/
import { SkyFormsModule } from '../sky-forms/sky-forms.module';

/** Layout Components **/
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { QuotesComponent } from './quotes/quotes.component';
import { SplashComponent } from './splash/splash.component';
import { DescriptionComponent } from './description/description.component';

export const SkyRoutes: Routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    SkyFormsModule,
    RouterModule
  ],
  declarations: [MainComponent, HeaderComponent, FooterComponent, ContentComponent, HomeComponent, ContactComponent, ServicesComponent, QuotesComponent, SplashComponent, DescriptionComponent],
  exports: [MainComponent]
})
export class SkyLayoutModule { }
