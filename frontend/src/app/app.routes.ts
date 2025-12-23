import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'invest-work',
    loadComponent: () => import('./invest-work/invest-work.page').then((m) => m.InvestWorkPage),
  },
  {
    path: 'study',
    loadComponent: () => import('./study/study.page').then((m) => m.StudyPage),
  },
  {
    path: 'visit',
    loadComponent: () => import('./visit/visit.page').then((m) => m.VisitPage),
  },
  {
    path: 'insights',
    loadComponent: () => import('./insights/insights.page').then((m) => m.InsightsPage),
  },
  {
    path: 'intake',
    loadComponent: () => import('./intake/intake.page').then((m) => m.IntakePage),
  },
  {
    path: 'disclaimer',
    loadComponent: () => import('./disclaimer/disclaimer.page').then((m) => m.DisclaimerPage),
  },
  {
    path: 'privacy',
    loadComponent: () => import('./privacy/privacy.page').then((m) => m.PrivacyPage),
  },
];
