/** Angular Modules **/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** Custom Modules **/
import { WpClientModule } from '@skypress/wp-client';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { ShellModule } from './shell/shell.module';
import { HomeModule } from './home/home.module';
import { BlogModule } from './blog/blog.module';

/** Components **/
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShellModule,
    HomeModule,
    BlogModule,
    NgbModule.forRoot(),
    WpClientModule.forRoot( 'warObject' ),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
