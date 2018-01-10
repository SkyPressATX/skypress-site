import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sky-header',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a *ngIf="home" class="navbar-brand" href="/">SkyPress</a>
            <button class="navbar-toggler" type="button" (click)="isCollapsed = !isCollapsed">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" [ngbCollapse]="isCollapsed">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item" *ngFor="let item of menuItems">
                        <a *ngIf="item.link" class="nav-link" href="{{item.link}}">{{item.name}}</a>
                        <a *ngIf="item.route" class="nav-link" href="#">{{item.name}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

    @Input( 'home' ) home: string;

    menuItems: any[];
    public isCollapsed = true;

  constructor() { }

  ngOnInit() {
      this.menuItems = [
          { name: 'Sevices', link: '#services' },
          { name: 'Blog' }
      ];
  }

}
