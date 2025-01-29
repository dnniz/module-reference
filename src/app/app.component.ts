import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListMovieComponent } from './movies/list-movie/list-movie.component';
import { MenuComponent } from "./shared/components/menu/menu.component";
import { RatingComponent } from "./shared/components/rating/rating.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListMovieComponent, MenuComponent, RatingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {


}
