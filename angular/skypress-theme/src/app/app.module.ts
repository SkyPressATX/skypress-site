import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WpClientModule } from '@skypress/wp-client';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SkyLayoutModule, SkyRoutes } from './sky-layout/sky-layout.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SkyLayoutModule,
    NgbModule.forRoot(),
    WpClientModule.forRoot( 'warObject' ),
    RouterModule.forRoot( SkyRoutes )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
