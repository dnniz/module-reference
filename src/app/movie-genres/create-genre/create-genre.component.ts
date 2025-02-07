import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormGenreComponent } from "../form-genre/form-genre.component";
import { GenreCreateDto } from './genre-create.dto';

@Component({
  selector: 'app-create-genre',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatCardModule, FormGenreComponent],
  templateUrl: './create-genre.component.html',
  styleUrl: './create-genre.component.css'
})
export class CreateGenreComponent{

  private router = inject(Router);


  saveChanges(genre: GenreCreateDto) {

    // Save logic DB

     console.log('Genre created', genre);
    // this.router.navigate(['/genres']);
  }

  cancel() {

    console.log('cancelled');

    // this.router.navigate(['/genres']);
  }
}
