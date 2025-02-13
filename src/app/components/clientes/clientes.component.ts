import { Component } from '@angular/core';
import { CardForClientsComponent } from '../card-for-clients/card-for-clients.component';

@Component({
  selector: 'app-clientes',
  imports: [CardForClientsComponent],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css',
})
export class ClientesComponent {}
