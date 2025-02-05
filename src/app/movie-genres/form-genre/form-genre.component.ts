import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstLetterCapital } from '../../shared/functions/validations';
import { GenreCreateDto } from '../create-genre/genre-create.dto';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { GenreUpdateDto } from '../edit-genre/genre-update.dto';
import { FormContainerComponent } from "../../shared/components/form-container/form-container.component";

const { required, pattern, compose } = Validators;
@Component({
  selector: 'app-form-genre',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatCardModule, FormContainerComponent],
  templateUrl: './form-genre.component.html',
  styleUrl: './form-genre.component.css'
})
export class FormGenreComponent implements OnInit {

  ngOnInit() {
    if (this.model) {
      this.form.patchValue(this.model);
    }
  }

  @Input()
  model?: GenreUpdateDto;

  @Input({ required: true })
  titleContainer!: string;

  @Output()
  postForm = new EventEmitter<GenreCreateDto>();

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: ['', { validators: [required, pattern("[a-zA-Z ]*"), firstLetterCapital()] }]

  });

  printErrorMessage() {
    const { name } = this.form.controls;

    if (name.hasError('required') && name.touched) {
      return 'Name is required';
    }

    if (name.hasError('pattern')) {
      return 'Name must contain only letters';
    }

    if (name.hasError('firstLetterCapital')) {
      return name.getError('firstLetterCapital').message;
    }

    return '';
  }

  saveChanges() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const genre = this.form.value as GenreCreateDto;
    this.postForm.emit(genre);
  }

  cancel() {

    // this.router.navigate(['/genres']);
  }
}
