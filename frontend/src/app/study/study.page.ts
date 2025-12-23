import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-study',
  templateUrl: 'study.page.html',
  styleUrls: ['study.page.scss'],
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
export class StudyPage {
  constructor() {}
}

