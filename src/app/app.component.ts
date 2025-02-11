import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lamatco-web';
}
