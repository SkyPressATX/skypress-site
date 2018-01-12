import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** Components to Route To **/
import { HomeComponent } from './home/home.component'
import { BlogComponent } from './blog/blog.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent }
    // { path: 'blog', component: BlogComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot( appRoutes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
