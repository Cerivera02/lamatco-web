import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-with-photo',
  imports: [],
  templateUrl: './card-with-photo.component.html',
  styleUrl: './card-with-photo.component.css',
})
export class CardWithPhotoComponent {
  @Input() titulo: string | undefined;
  @Input() descripcion: string | undefined;
  @Input() foto: string | undefined;
}
