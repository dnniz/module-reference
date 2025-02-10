import { Component } from '@angular/core';
import { FormCinemaComponent } from "../form-cinema/form-cinema.component";
import { CinemaPostDto } from './cinema-post.dto';

@Component({
  selector: 'app-create-cinema',
  imports: [FormCinemaComponent],
  templateUrl: './create-cinema.component.html',
  styleUrl: './create-cinema.component.css'
})
export class CreateCinemaComponent {

    saveChanges(actor: CinemaPostDto) {
      console.log('Actor created', actor);
    }

    cancel() {
      console.log('Cancelled');
    }
}
