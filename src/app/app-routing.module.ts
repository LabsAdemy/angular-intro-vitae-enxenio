import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./domain/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./domain/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'not-found',
    loadChildren: () => import('./domain/not-found/not-found.module').then((m) => m.NotFoundModule),
  },
  {
    path: 'search',
    loadChildren: () => import('./domain/search/search.module').then((m) => m.SearchModule),
  },
  {
    path: 'categories',
    loadChildren: () => import('./domain/categories/categories.module').then((m) => m.CategoriesModule),
  },
  {
    path: 'items',
    loadChildren: () => import('./domain/items/items.module').then((m) => m.ItemsModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./domain/login/login.module').then((m) => m.LoginModule),
  },

  {
    path: 'activate',
    loadChildren: () => import('./domain/activate/activate.module').then((m) => m.ActivateModule),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
