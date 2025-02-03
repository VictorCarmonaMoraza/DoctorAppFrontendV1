import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { ListadoEspecialidadComponent } from '../especialidad/pages/listado-especialidad/listado-especialidad.component';
import {} from '../especialidad/especialidad.module';


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' }, // No necesita pathMatch aquí
      { path: 'especialidades', component: ListadoEspecialidadComponent, pathMatch: 'full' }, // Agregar esta ruta si tienes un componente para especialidades
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
