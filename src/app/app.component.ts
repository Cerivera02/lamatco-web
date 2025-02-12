import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    CarouselComponent,
    AcercaDeComponent,
    ServiciosComponent,
    ClientesComponent,
    FooterComponent,
    ContactUsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lamatco-web';
}
