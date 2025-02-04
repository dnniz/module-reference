import { Component, Input, numberAttribute } from '@angular/core';
import { GenreUpdateDto } from './genre-update.dto';
import { FormGenreComponent } from "../form-genre/form-genre.component";
import { GenreCreateDto } from '../create-genre/genre-create.dto';

@Component({
  selector: 'app-edit-genre',
  imports: [FormGenreComponent],
  templateUrl: './edit-genre.component.html',
  styleUrl: './edit-genre.component.css'
})
export class EditGenreComponent {
  @Input({ transform: numberAttribute})
  id!: number;


  model: GenreUpdateDto = {id: 1, name: 'Comedy'};

  saveChanges(model: GenreCreateDto) {
    console.log('Genre updated', model);
  }
}
