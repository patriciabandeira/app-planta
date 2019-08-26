import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlantaDetalhesPage } from './planta-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: PlantaDetalhesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlantaDetalhesPage]
})
export class PlantaDetalhesPageModule {}
