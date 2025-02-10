import { Component, Input, numberAttribute } from '@angular/core';
import { CinemaDto } from './cinema.dto';
import { FormCinemaComponent } from "../form-cinema/form-cinema.component";
import { CinemaPostDto } from '../create-cinema/cinema-post.dto';

@Component({
  selector: 'app-edit-cinema',
  imports: [FormCinemaComponent],
  templateUrl: './edit-cinema.component.html',
  styleUrl: './edit-cinema.component.css'
})
export class EditCinemaComponent {

  @Input({ transform: numberAttribute})
  id!: number;

  model: CinemaDto = {id: 1, name: 'Cinema Saib', latitude: 13.74485654307157, longitude:  100.54796959685952}

  saveChanges(model: CinemaPostDto) {
    console.log('Actor updated', model);
  }

  cancel() {
    console.log('Cancelled');
  }
}
