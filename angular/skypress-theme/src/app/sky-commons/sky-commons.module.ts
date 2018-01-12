import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash/splash.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SplashComponent],
  exports: [SplashComponent]
})
export class SkyCommonsModule { }
