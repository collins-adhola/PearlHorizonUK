import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonFooter, IonToolbar, IonButtons, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.scss'],
  imports: [IonFooter, IonToolbar, IonButtons, IonButton, RouterLink],
})
export class SiteFooterComponent {
  contactEmail = 'hello@pearlhorizon.co.uk';
  
  constructor() {}
}

