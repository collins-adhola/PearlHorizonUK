import { Component } from '@angular/core';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-disclaimer',
  templateUrl: 'disclaimer.page.html',
  styleUrls: ['disclaimer.page.scss'],
  imports: [
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem
  ],
})
export class DisclaimerPage {
  constructor() {}
}

