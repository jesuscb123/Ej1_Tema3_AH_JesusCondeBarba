import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
  imports: [CommonModule]
})
export class CalculadoraComponent implements OnChanges {
  @Input() numero1: number | null = null;
  @Input() numero2: number | null = null;
  @Input() disparador = 0; // cambia cuando el padre pulsa "Calcular"

  @Output() resultadoCalculado = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['disparador']) {
      this.calcularYEmitir();
    }
  }

  private calcularYEmitir() {
    const a = this.toNumber(this.numero1);
    const b = this.toNumber(this.numero2);

    if (a === null || b === null) {
      this.resultadoCalculado.emit('⚠️ Introduce dos números válidos.');
      return;
    }

    const suma = a + b;
    const resta = a - b;
    const mult = a * b;
    const div = b === 0 ? '∞ (no se puede dividir entre 0)' : (a / b).toFixed(2);

    const texto =
`➕ Suma: ${suma}
➖ Resta: ${resta}
✖️ Multiplicación: ${mult}
➗ División: ${div}`;

    this.resultadoCalculado.emit(texto);
  }

  private toNumber(v: any): number | null {
    if (v === null || v === undefined || v === '') return null;
    const n = Number(v);
    return Number.isFinite(n) ? n : null;
  }
}
