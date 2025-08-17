import { Routes } from '@angular/router';

export const routes: Routes = [

   {
        path: '',
        loadComponent: () => import('./business/langindpage/langindpage.component')
            .then(m => m.LangindpageComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
