import { AfterViewInit, Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { Especialidad } from '../../interfaces/especialidad.';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { EspecialidadService } from '../../services/especialidad.service';
import { CompartidoService } from '../../../compartido/services/compartido.service';

@Component({
  selector: 'app-listado-especialidad',
  standalone: false,

  templateUrl: './listado-especialidad.component.html',
  styleUrl: './listado-especialidad.component.css'
})
export class ListadoEspecialidadComponent implements OnInit, AfterViewInit {


  displayedColumns: string[] = [
    'nombreEspecialidad',
    'descripcion',
    'estado',
    'acciones'
  ];

  dataInicial: Especialidad[] = [];
  dataSource = new MatTableDataSource(this.dataInicial);
  @ViewChild(MatPaginator) paginacionTabla!: MatPaginator;

  constructor(
    private _especialidadServicio: EspecialidadService,
    private _comnpartidoService: CompartidoService
  ) { }

  obtenerEspecialidades() {
    this._especialidadServicio.lista().subscribe({
      next: (data) => {
        if (data.isExitoso) {
          this.dataSource = new MatTableDataSource(data.resultado);
          this.dataSource.paginator = this.paginacionTabla;
        } else {
          this._comnpartidoService.mostrarAlerta(
            'No se encontraron datos', 'Advertencia'
          )
        }
      },
      error:(e)=>{}
    })
  }

  //Al principio de la carga
  ngOnInit(): void {
    this.obtenerEspecialidades();
  }

  //Cuando todo esta cargado
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginacionTabla;
  }

}
