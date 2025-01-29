import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompartidoService } from '../services/compartido.service';

@Component({
  selector: 'app-layout',
  standalone: false,

  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})

export class LayoutComponent implements OnInit {

  username: string = '';

  constructor(
    private router: Router,
    private compartidoService: CompartidoService
  ) {
  }

  ngOnInit(): void {
    const usuarioToken = this.compartidoService.obtenerSesion();
    // if (usuarioToken != null) {
    //   this.username = usuarioToken.username;
    // }
    this.ValidarUsuarioEnLocalStorage(usuarioToken);
  }

  ValidarUsuarioEnLocalStorage(usuario: any) {
    if (usuario != null) {
      this.username = usuario.username;
    }
  }

  cerrarSesion(){
    //Eliminamos usuario sesion
    this.compartidoService.eliminarSesion();
    //Redireccionamos al login
    this.router.navigate(['login']);
  }
}
