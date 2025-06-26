import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'details',
    loadComponent: () => import('./details/details.component').then((m) => m.DetailsComponent),
  },
  {
    path: '',
    redirectTo: 'details',
    pathMatch: 'full',
  },
];
