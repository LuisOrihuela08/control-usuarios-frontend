import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'home',
        loadComponent: () => import('./business/langindpage/langindpage.component').then(m => m.LangindpageComponent)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
