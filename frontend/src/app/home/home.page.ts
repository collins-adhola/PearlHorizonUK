import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonContent, 
    IonButton, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent,
    RouterLink
  ],
})
export class HomePage {
  constructor(private router: Router) {}

  scrollToServices() {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  goTo(path: string): void {
    this.router.navigateByUrl(path);
  }

  onCardKeydown(event: KeyboardEvent, path: string): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.goTo(path);
    }
  }
}
