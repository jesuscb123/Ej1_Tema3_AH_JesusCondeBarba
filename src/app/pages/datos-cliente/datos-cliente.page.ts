import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonLabel, IonButton
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { ClienteStateService } from '../../core/cliente-state.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  standalone: true,
  selector: 'app-datos-cliente',
  templateUrl: './datos-cliente.page.html',
  styleUrls: ['./datos-cliente.page.scss'],
  imports: [
    CommonModule, RouterLink,
    IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonLabel, IonButton
  ],
})
export class DatosClientePage implements OnInit {
  cliente: Cliente | null = null;

  constructor(private state: ClienteStateService) {}

  ngOnInit(): void {
    this.cliente = this.state.value;
  }
}
