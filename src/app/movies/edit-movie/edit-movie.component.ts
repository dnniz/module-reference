import { Component, Input, numberAttribute } from '@angular/core';
import { MoviePostDto } from '../DTOs/movie-post.dto';
import { FormMovieComponent } from "../form-movie/form-movie.component";
import { MovieDto } from '../DTOs/movie.dto';
import moment from 'moment';

@Component({
  selector: 'app-edit-movie',
  imports: [FormMovieComponent],
  templateUrl: './edit-movie.component.html',
  styleUrl: './edit-movie.component.css'
})
export class EditMovieComponent {

    @Input({ transform: numberAttribute})
    id!: number;

    model: MovieDto = {
      id: 1,
      title: 'Spiderman: No way home',
      releaseDate: moment('2024-12-01').toDate(),
      posterUrl: 'https://m.media-amazon.com/images/I/81AeYFqjCTL._AC_SL1300_.jpg',
      trailerVideoUrl: 'https://www.youtube.com/watch?v=JfVOs4VSpmA',
      genres: [
        {
          key: 4,
          value: 'animation'
        }
      ],
      theatres:[
        {
          key: 3,
          value: 'Egyptian Theatre'
        }
      ]
    };


  saveChanges(actor: MoviePostDto) {
    console.log('Movie created', actor);
  }

  cancel() {
    console.log('Cancelled');
  }
}
