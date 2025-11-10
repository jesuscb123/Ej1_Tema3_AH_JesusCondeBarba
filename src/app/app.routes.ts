import { Routes } from '@angular/router';

export const routes: Routes = [
  // Redirección inicial
  { path: '', redirectTo: 'list/servicios', pathMatch: 'full' },

  {
    path: 'list',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
    children: [
     
      { path: 'perfil', loadComponent: () => import('./pages/perfil.page').then(m => m.PerfilPage) },
      { path: 'datos', loadComponent: () => import('./pages/datos.page').then(m => m.DatosPage) },


      { path: 'cliente', loadComponent: () => import('./pages/cliente/cliente.page').then(m => m.ClientePage) },
      { path: 'datos-cliente', loadComponent: () => import('./pages/datos-cliente/datos-cliente.page').then(m => m.DatosClientePage) },

     
      { path: ':cat', loadComponent: () => import('./pages/cards-list.page').then(m => m.CardsListPage) },


      { path: '', redirectTo: 'servicios', pathMatch: 'full' },
    ]
  },


  { path: '**', redirectTo: 'list/servicios' },
];
