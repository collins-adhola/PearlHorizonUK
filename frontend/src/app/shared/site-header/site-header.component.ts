import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonButtons, 
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss'],
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonButtons, 
    IonButton,
    RouterLink
  ],
})
export class SiteHeaderComponent {
  constructor() {}
}

