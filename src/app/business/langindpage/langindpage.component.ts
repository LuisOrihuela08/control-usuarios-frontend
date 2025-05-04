import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioDTO } from '../../shared/models/UsuarioDTO';
import { UsuarioService } from '../../shared/services/usuario.service';

@Component({
  selector: 'app-langindpage',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './langindpage.component.html',
  styleUrl: './langindpage.component.css'
})
export class LangindpageComponent implements OnInit {

  usuario: UsuarioDTO = new UsuarioDTO();
  usuarioForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', Validators.required],
      numero_telefonico: ['', Validators.required]
    });

    //Verificamos si los valores estan llegando
    console.log(this.usuarioForm.value);
    this.usuarioForm.valueChanges.subscribe((valores) => {
      console.log('Valores del registro de Usuario: ', valores);
    });
  }

  enviarFormulario() {
    console.log('Form submitted');
    if (this.usuarioForm.invalid) {
      console.log('Formulario inválido:', this.usuarioForm.invalid);
      alert('Formulario inválido. Por favor, complete todos los campos requeridos.');
      return;
    }
    const formData = new FormData();
    formData.append('nombres', this.usuarioForm.value.nombres);
    formData.append('apellido', this.usuarioForm.value.apellidos);
    formData.append('correo', this.usuarioForm.value.correo);
    formData.append('numero_telefonico', this.usuarioForm.value.numero_telefonico);

    console.log('Formulario enviado: ', formData);
    
    this.usuarioService.addUsuario(this.usuarioForm.value).subscribe(
      (response) => {
        console.log('Respuesta del servidor: ', response);
        alert('Usuario registrado exitosamente.');
        this.usuarioForm.reset(); // Resetear el formulario después de enviar
      },
      (error) => {
        console.error('Error al registrar el usuario: ', error);
        alert('Error al registrar el usuario. Por favor, inténtelo de nuevo más tarde.');
      }
    );
  }
}