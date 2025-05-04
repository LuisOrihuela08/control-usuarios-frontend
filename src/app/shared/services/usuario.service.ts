import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioDTO } from '../models/UsuarioDTO';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  addUsuario(usuario: UsuarioDTO): Observable<any> {
    return this.http.post('http://localhost:8080/api/usuarios/add', usuario);
  }
}
