import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonContent } from '@ionic/angular/standalone';
import { SiteHeaderComponent } from './shared/site-header/site-header.component';
import { SiteFooterComponent } from './shared/site-footer/site-footer.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonContent, SiteHeaderComponent, SiteFooterComponent],
})
export class AppComponent {
  constructor() {}
}
