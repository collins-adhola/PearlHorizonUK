import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-visit',
  templateUrl: 'visit.page.html',
  styleUrls: ['visit.page.scss'],
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
export class VisitPage {
  constructor() {}
}

