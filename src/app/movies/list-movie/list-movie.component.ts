import { Component, Input, OnInit } from '@angular/core';
import { GenericListComponent } from "../../shared/components/generic-list/generic-list.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-list-movie',
  imports: [GenericListComponent, MatButtonModule, MatIconModule],
  templateUrl: './list-movie.component.html',
  styleUrl: './list-movie.component.css'
})
export class ListMovieComponent{

  removeMovie(index: number): void {
    this.arrMovies.splice(index, 1);
  }

  @Input({required: true})
  arrMovies: any[] = [];
}
