import { Routes } from '@angular/router';

export const routes: Routes = [
    // la ruta o path welcome, es el default
    {
        path: '', redirectTo: 'welcome', pathMatch: 'full',
    },
    {
        path: 'search',
        loadChildren: () => import('./components/main/main.route').then((m) => m.routes)
    },
    {
        path: 'welcome',
        loadChildren: () => import('./components/welcome/welcome.route').then((m) => m.routes)
    },
    {
        path: 'peliculas',
        loadChildren: () => import('./components/peliculas/peliculas.route').then((m) => m.routes)
    },
    {
        path: 'series',
        loadChildren: () => import('./components/series/series.route').then((m) => m.routes)
    },
    {
        path: '**', redirectTo: 'welcome', pathMatch: 'full',
    },
];

