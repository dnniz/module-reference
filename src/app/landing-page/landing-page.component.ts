import { Component, OnInit } from '@angular/core';
import { RatingComponent } from "../shared/components/rating/rating.component";
import { ListMovieComponent } from '../movies/list-movie/list-movie.component';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  imports: [DatePipe, UpperCasePipe, RatingComponent, ListMovieComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent  implements OnInit {

  ngOnInit(): void {
    setTimeout(() => {

      this.arrMoviesOnCartelera = [
        {
          title: 'The Shawshank Redemption',
          year: 1994,
          rating: 9.3,
          url: '//upload.wikimedia.org/wikipedia/en/thumb/8/8c/Princess_Mononoke_Japanese_poster.png/220px-Princess_Mononoke_Japanese_poster.png'
        },
        {
          title: 'The Godfather',
          year: 1972,
          rating: 9.2,
          url: '//upload.wikimedia.org/wikipedia/en/thumb/f/f5/Castle_in_the_Sky_%281986%29.png/220px-Castle_in_the_Sky_%281986%29.png'
        },
        {
          title: 'The Godfather: Part II',
          year: 1974,
          rating: 9.0,
          url: '//upload.wikimedia.org/wikipedia/en/f/fc/Porco_Rosso_%28Movie_Poster%29.jpg'
        },
        {
          title: 'The Dark Knight',
          year: 2008,
          rating: 9.0,
          url: '//upload.wikimedia.org/wikipedia/en/thumb/d/db/Spirited_Away_Japanese_poster.png/220px-Spirited_Away_Japanese_poster.png'
        },
        {
          title: 'The Dark Knight',
          year: 2008,
          rating: 9.0,
          url: '//upload.wikimedia.org/wikipedia/en/thumb/5/51/Ponyo.png/220px-Ponyo.png'
        },
        {
          title: 'The Dark Knight',
          year: 2008,
          rating: 9.0,
          url: '//upload.wikimedia.org/wikipedia/en/4/41/How_Do_You_Live_poster.jpg'
        },
        {
          title: 'The Dark Knight',
          year: 2008,
          rating: 9.0,
          url: '//upload.wikimedia.org/wikipedia/en/thumb/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg/220px-My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg'
        }
      ];

      this.arrMoviesNextReleases = [
        {
          title: 'The Shawshank Redemption',
          year: 1994,
          rating: 9.3,
          url: '//upload.wikimedia.org/wikipedia/en/0/07/Kiki%27s_Delivery_Service_%28Movie%29.jpg'
        },
        {
          title: 'The Godfather',
          year: 1972,
          rating: 9.2,
          url: '//upload.wikimedia.org/wikipedia/en/thumb/f/f5/Castle_in_the_Sky_%281986%29.png/220px-Castle_in_the_Sky_%281986%29.png'
        },
        {
          title: 'The Godfather: Part II',
          year: 1974,
          rating: 9.0,
          url: '//upload.wikimedia.org/wikipedia/en/f/fc/Porco_Rosso_%28Movie_Poster%29.jpg'
        },
        {
          title: 'The Dark Knight',
          year: 2008,
          rating: 9.0,
          url: '//upload.wikimedia.org/wikipedia/en/thumb/d/db/Spirited_Away_Japanese_poster.png/220px-Spirited_Away_Japanese_poster.png'
        },
        {
          title: 'The Dark Knight',
          year: 2008,
          rating: 9.0,
          url: '//upload.wikimedia.org/wikipedia/en/thumb/5/51/Ponyo.png/220px-Ponyo.png'
        },
        {
          title: 'The Dark Knight',
          year: 2008,
          rating: 9.0,
          url: '//upload.wikimedia.org/wikipedia/en/4/41/How_Do_You_Live_poster.jpg'
        },
        {
          title: 'The Dark Knight',
          year: 2008,
          rating: 9.0,
          url: '//upload.wikimedia.org/wikipedia/en/thumb/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg/220px-My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg'
        }
      ];
    }, 500);
  }
  title = 'My App Reference';
  date = new Date();
  arrMoviesOnCartelera: any[] = [];
  arrMoviesNextReleases: any[] = [];


  processRating(rating: number): void {
    alert(`Rating: ${rating}`);
  }
}
