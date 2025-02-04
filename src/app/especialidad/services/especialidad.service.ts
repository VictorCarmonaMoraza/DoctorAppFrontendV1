import { Injectable } from '@angular/core';
import { environment } from '../../../environments/encironment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../interfaces/api-response';
import { Especialidad } from '../interfaces/especialidad.';




@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  //Obtener ruta aplicacion
  baseUrl: string = environment.apiUrl + 'especialidad/';

  constructor(private http: HttpClient) { }

  lista(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}`);
  }

  crear(request: Especialidad): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrl}`, request);
  }

  editar(request: Especialidad): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.baseUrl}`, request);
  }

  eliminar(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.baseUrl}${id}`);
  }
}
