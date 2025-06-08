import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./paginas/login-registro/login-registro.component').then(m => m.LoginRegistroComponent)
    },
    {
        path: 'home',
        loadComponent: () => import('./paginas/home/home.component').then(m => m.HomeComponent)
    }
];
