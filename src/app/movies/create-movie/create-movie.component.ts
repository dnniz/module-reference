import { Component } from '@angular/core';
import { FormMovieComponent } from "../form-movie/form-movie.component";
import { MoviePostDto } from '../DTOs/movie-post.dto';

@Component({
  selector: 'app-create-movie',
  imports: [FormMovieComponent],
  templateUrl: './create-movie.component.html',
  styleUrl: './create-movie.component.css'
})
export class CreateMovieComponent {

    saveChanges(actor: MoviePostDto) {
      console.log('Movie created', actor);
    }

    cancel() {
      console.log('Cancelled');
    }
}
