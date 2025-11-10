import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonLabel,
  IonInput, IonButton, IonNote
} from '@ionic/angular/standalone';
import { ClienteStateService } from '../../core/cliente-state.service';

@Component({
  standalone: true,
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
  imports: [
    CommonModule, ReactiveFormsModule,
    IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonLabel,
    IonInput, IonButton, IonNote
  ],
})
export class ClientePage {
  clienteForm = this.fb.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    nacionalidad: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private state: ClienteStateService,
    private router: Router
  ) {}

  guardar() {
    if (this.clienteForm.invalid) {
      this.clienteForm.markAllAsTouched();
      return;
    }
    this.state.setCliente(this.clienteForm.value as any);
    this.router.navigateByUrl('/datos-cliente');
  }

  get f() { return this.clienteForm.controls; }
}
