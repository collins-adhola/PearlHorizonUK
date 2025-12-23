import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-invest-work',
  templateUrl: 'invest-work.page.html',
  styleUrls: ['invest-work.page.scss'],
  imports: [
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonButton,
    RouterLink
  ],
})
export class InvestWorkPage {
  constructor() {}
}

