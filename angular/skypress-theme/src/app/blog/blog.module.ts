import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Custom Modules **/
import { SkyCommonsModule } from '../sky-commons/sky-commons.module';

/** Custom Components **/
import { BlogComponent } from './blog.component';

@NgModule({
  imports: [
    CommonModule,
    SkyCommonsModule
  ],
  declarations: [BlogComponent]
})
export class BlogModule { }
