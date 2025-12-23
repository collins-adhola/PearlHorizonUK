import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonBadge } from '@ionic/angular/standalone';

@Component({
  selector: 'app-insights',
  templateUrl: 'insights.page.html',
  styleUrls: ['insights.page.scss'],
  imports: [
    CommonModule,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonBadge,
    RouterLink
  ],
})
export class InsightsPage {
  insights = [
    {
      title: "Before You Commit: The 5 Mistakes That Cost the Most",
      description: "Common pitfalls that derail Uganda entry plans and how to avoid them early.",
      tag: "Invest & Work"
    },
    {
      title: "How to Vet Partners Without Becoming Operational",
      description: "Practical steps for due diligence that don't require you to become hands-on.",
      tag: "Invest & Work"
    },
    {
      title: "Uganda Entry: What 'Verification' Actually Means",
      description: "Understanding verification support and its boundaries in advisory engagements.",
      tag: "Invest & Work"
    },
    {
      title: "Education Decisions: Questions Parents Should Ask Early",
      description: "Key considerations for families evaluating education pathways in Uganda.",
      tag: "Study"
    },
    {
      title: "Group Visits: How to Keep Scope and Costs Controlled",
      description: "Structuring group visit coordination to maintain clear boundaries and budgets.",
      tag: "Visit"
    },
    {
      title: "Visas: Administrative Coordination vs Guarantees",
      description: "What administrative support includes and what it cannot promise.",
      tag: "Visit"
    }
  ];

  getTagColor(tag: string): string {
    if (tag === "Invest & Work") return "primary";
    if (tag === "Study") return "secondary";
    if (tag === "Visit") return "tertiary";
    return "medium";
  }

  constructor() {}
}

