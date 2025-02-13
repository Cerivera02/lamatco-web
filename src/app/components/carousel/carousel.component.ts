import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  imports: [CommonModule],
})
export class CarouselComponent {
  images = [
    { url: 'img/materiales.jpg', alt: 'Image 1' },
    { url: 'img/inclusion.jpg', alt: 'Image 2' },
    { url: 'img/capacitaciones.jpg', alt: 'Image 3' },
    { url: 'img/trabajadores.jpg', alt: 'Image 4' },
    { url: 'img/soldadura.jpg', alt: 'Image 5' },
  ];
  currentIndex = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => this.nextSlide(), 3000);
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
