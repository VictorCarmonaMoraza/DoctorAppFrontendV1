import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent }, // No necesita pathMatch aquí
      // { path: 'especialidades', component: EspecialidadesComponent }, // Agregar esta ruta si tienes un componente para especialidades
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Asegura que la ruta base redirige a 'dashboard'
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutRoutingModule { }
