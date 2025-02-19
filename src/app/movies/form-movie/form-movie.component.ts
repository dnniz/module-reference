import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormContainerComponent } from "../../shared/components/form-container/form-container.component";
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MoviePostDto, MovieDto } from '../DTOs';
import moment from 'moment';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InputImgComponent } from "../../shared/components/input-img/input-img.component";
import { MatInputModule } from '@angular/material/input';
import { DatePickerComponent } from '../../shared/components/date-picker/date-picker.component';
import { ChipsSelectorComponent } from "../../shared/components/chips-selector/chips-selector.component";
import { itemSelectorDto } from '../../shared/components/chips-selector/item-selector.dto';
const { required, pattern } = Validators;

@Component({
  selector: 'app-form-movie',
  imports: [
    //Reactive Components Dependency:
    ReactiveFormsModule,
    //Angular Material:
    MatFormFieldModule,
    MatInputModule,
    //Shared Components:
    FormContainerComponent,
    DatePickerComponent,
    InputImgComponent,
    ChipsSelectorComponent
],
  templateUrl: './form-movie.component.html',
  styleUrl: './form-movie.component.css'
})
export class FormMovieComponent implements OnInit{
    ngOnInit(): void {
      if(this.model)
        this.form.patchValue(this.model);
    }

    //DB Data
    baseItemsGenres: itemSelectorDto[] = [
      {
        key:1,
        value: 'Drama'
      },
      {
        key:2,
        value: 'Comedy'
      },
      {
        key:3,
        value: 'Action'
      },
      {
        key:4,
        value: 'Animation'
      }
    ]
    baseItemsTheatres: itemSelectorDto[] = [
      {
        key:1,
        value: 'TCL Chinese Theatres'
      },
      {
        key:2,
        value: 'Academy Museum Of Motion Pictures'
      },
      {
        key:3,
        value: 'Egyptian Theatre'
      },
      {
        key:4,
        value: 'El Capitan Theatre'
      }
    ]


    //Model
    @Input()
    model: MovieDto = {genres: [], id: 0, posterUrl: null, releaseDate: null, theatres: [], title: null, trailerVideoUrl: null};

    //Inputs & Oputs
    @Input({ required: true })
    headerlabel!: string;

    @Output()
    postForm = new EventEmitter<MoviePostDto>();

    @Output()
    cancelForm = new EventEmitter<void>();

    //Build Components
    private formBuilder = inject(FormBuilder);
    form = this.formBuilder.group({
          title: ['', { validators: [required]}],
          releaseDate: new FormControl<Date | null>(null, { validators: [required]}),
          trailerVideoUrl: '',
          poster: new FormControl<File | null>(null),
          genres: new FormControl<itemSelectorDto[]>([]),
          theatres: new FormControl<itemSelectorDto[]>([]),
        });

    //Trigger Functions
    onReleaseDateChange(date: Date | null) {
      this.form.controls['releaseDate'].setValue(date);
    }
    onImageSelected(file: File): void {
      this.form.controls['poster'].setValue(file);
    }

    onGenresSelected(genres: itemSelectorDto[] | undefined){
      this.form.controls['genres'].setValue(genres? genres : [])
    }

    onTheatreSelected(theatres: itemSelectorDto[] | undefined){
      this.form.controls['theatres'].setValue(theatres? theatres : [])
    }

    //Functions
    saveChanges() {
      if (this.form.invalid) {
        this.form.markAllAsTouched();
        return;
      }

      const movie = this.form.value as MoviePostDto;
      movie.releaseDate = moment(movie.releaseDate).toDate();


      this.postForm.emit(movie);
    }

    cancel() {
      this.cancelForm.emit();
    }

    //Validations
    printErrorMessage() {
      const { title, releaseDate } = this.form.controls;

      if (title.hasError('required') && title.touched) {
        return 'title is required';
      }

      if (releaseDate.hasError('required') && releaseDate.touched) {
        return 'Date of birth is required';
      }

      if (releaseDate.hasError('pattern')) {
        return 'Release Date must be in the format yyyy-mm-dd';
      }

      return '';
    }
}
