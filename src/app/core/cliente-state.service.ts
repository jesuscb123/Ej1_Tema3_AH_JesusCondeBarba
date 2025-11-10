import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cliente } from '../models/cliente.model';

@Injectable({ providedIn: 'root' })
export class ClienteStateService {
  private _cliente = new BehaviorSubject<Cliente | null>(null);

  setCliente(c: Cliente) {
    this._cliente.next(c);
  }

  get cliente$() {
    return this._cliente.asObservable();
  }

  get value(): Cliente | null {
    return this._cliente.value;
  }
}
