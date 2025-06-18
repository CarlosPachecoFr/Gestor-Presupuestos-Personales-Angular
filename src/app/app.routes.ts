import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./vistas/login-registro/login-registro.component').then(m => m.LoginRegistroComponent)
    },
    {
        path: 'home',
        loadComponent: () => import('./vistas/home/home.component').then(m => m.HomeComponent)
    }
];
