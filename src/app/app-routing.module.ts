import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: './inicio/inicio.module#InicioPageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'filme', loadChildren: './pages/movies/movies.module#MoviesPageModule' },
  { path: 'filme/:id', loadChildren: './pages/movie-details/movie-details.module#MovieDetailsPageModule' },
  { path: 'planta', loadChildren: './plantas/plantas.module#PlantasPageModule' },
  { path: 'planta/:id', loadChildren: './planta-detalhes/planta-detalhes.module#PlantaDetalhesPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
