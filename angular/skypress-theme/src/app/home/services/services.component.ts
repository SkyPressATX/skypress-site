import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sky-services',
  template: `
    <div id="services" class="container-fluid py-5">
          <div class="row row align-items-start justify-content-center">
              <div class="col col-lg-4 col-md-6 col-sm-12" *ngFor="let service of services">
                  <div class="card text-center p-3 no-border">
                      <div class="card-body">
                          <h4 class="card-title">
                            <i class="icon {{service.icon}}"></i>
                            <span class="ml-2">{{service.title}}</span>
                          </h4>
                          <p class="card-text">{{service.description}}</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  `,
  styles: [ '.no-border { border: none; }' ]
})
export class ServicesComponent implements OnInit {

  services: any[];

  constructor() { }

  ngOnInit() {
      this.services = [
        {
            icon: 'ion-coffee',
            title: 'Consulting',
            description: 'SkyPress can assist you in building future proof solutions for your web applications. Being a well known thought leader on WordPress web applications and the creator of the WAR framework, we can work with your team to rapidly develop your idea into a finished product.'
        },
        {
            icon: 'ion-code',
            title: 'Code Review',
            description: 'Whether you have recently started your project or are nearly finished, SkyPress will ensure your web application is up to par with proper code and security standards while troubleshooting and debugging any issues.'
        },
        {
            icon: 'ion-ribbon-b',
            title: 'Data Best Practices',
            description: '﻿Properly structured data models are the cornerstones to a successful application. They allow for rapid development throughout the entire project, and reduce the impact that changes will have on your application in the future. SkyPress works with our clients to take a data first approach in the design of their application.'
        },
        {
            icon: 'ion-cloud',
            title: 'Scalable Architecture',
            description: 'Performant code isn’t something that works amazingly well just for yourself, but for yourself plus a million other users at the same time. Focusing on the scalability of your application from the beginning phases of it’s architecture is the most efficient way of ensuring that it is baked into every aspect of it’s development.'
        },
        {
            icon: 'ion-network',
            title: 'Business Integrations',
            description: 'Businesses aren’t operated by a single program. Instead, we use the appropriate services that satisfy your needs. SkyPress can help with the integration of your web application and your existing business tools in order to streamline your daily workflow.'
        },
        {
            icon: 'ion-fireball',
            title: 'WAR Framework',
            description: 'SkyPress is passionate about expanding the capabilities of WordPress and growing the community. We built and released an open source Framework that simplifies the development of web applications built on top of WordPress. As it’s creators and maintainers, we want to help you with the implementation and extension of this powerful solution.'
        }
      ];
  }

}
