import { Component } from '@angular/core';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-privacy',
  templateUrl: 'privacy.page.html',
  styleUrls: ['privacy.page.scss'],
  imports: [
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
  ],
})
export class PrivacyPage {
  constructor() {}
}

