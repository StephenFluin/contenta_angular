import { Component, ViewChild, OnInit } from '@angular/core';
import { trigger, transition, group, query, style, animate } from '@angular/animations';
import { MdSidenav } from '@angular/material';
import { MaterialIconsService } from './services/material-icons/material-icons.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimation', [
      transition('recipes => features', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
        group([
          query(':leave', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)' }))),
          query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
        ]),
      ]),
      transition('features => recipes', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(-100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
        group([
          query(':leave', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(100%)' }))),
          query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
        ]),
      ]),
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'Umami Magazine';
  @ViewChild('sidenav') sidenav: MdSidenav;
  menu: Object[] = [
    { name: 'Home', url: '/recipes', icon: 'home' },
    { name: 'Features', url: '/features', icon: 'settings' }
  ];

  constructor(private materialIconsService: MaterialIconsService) { }

  ngOnInit() {
    this.materialIconsService.registerIcons();
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  getPage(outlet) {
    return outlet.activatedRouteData['page'];
  }
}
