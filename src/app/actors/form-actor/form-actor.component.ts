import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActorDto } from '../edit-actor/actor.dto';
import { ActorPostDto } from '../create-actor/actor-post.dto';
import moment from 'moment';
import { FormContainerComponent } from "../../shared/components/form-container/form-container.component";
import { dateCoulndBeFuture } from '../../shared/functions/validations';
import { InputImgComponent } from "../../shared/components/input-img/input-img.component";
import { DatePickerComponent } from '../../shared/components/date-picker/date-picker.component';

const { required, pattern } = Validators;

@Component({
  selector: 'app-form-actor',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatCardModule, DatePickerComponent, FormContainerComponent, InputImgComponent],
  templateUrl: './form-actor.component.html',
  styleUrl: './form-actor.component.css',
})
export class FormActorComponent implements OnInit{
  ngOnInit(): void {
    if (this.model) {
      this.form.patchValue(this.model);
    }
  }

  @Input()
  model: ActorDto = {dateOfBirth: null, id: 0, imageUrl: null, name: null};

  @Input({ required: true })
  headerlabel!: string;

  @Output()
  postForm = new EventEmitter<ActorPostDto>();

  @Output()
  cancelForm = new EventEmitter<void>();


  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: ['', { validators: [required, pattern("[a-zA-Z ]*")]}],
    dateOfBirth: new FormControl<Date | null>(null, { validators: [required, dateCoulndBeFuture()]}),
    image: new FormControl<File | null>(null)
  });

  onDateOfBirthChange(date: Date | null) {
    this.form.controls['dateOfBirth'].setValue(date);
  }

  onImageSelected(file: File): void {
    this.form.controls['image'].setValue(file);
  }

  printErrorMessage() {
    const { name, dateOfBirth } = this.form.controls;

    if (name.hasError('required') && name.touched) {
      return 'Name is required';
    }

    if (name.hasError('pattern')) {
      return 'Name must contain only letters';
    }

    if (dateOfBirth.hasError('required') && dateOfBirth.touched) {
      return 'Date of birth is required';
    }

    if (dateOfBirth.hasError('pattern')) {
      return 'Date of birth must be in the format yyyy-mm-dd';
    }

    if (dateOfBirth.hasError('dateCoulndBeFuture')) {
      return dateOfBirth.getError('dateCoulndBeFuture').message;
    }

    return '';
  }

  saveChanges() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const actor = this.form.value as ActorPostDto;
    actor.dateOfBirth = moment(actor.dateOfBirth).toDate();

    // if(actor.im)

    this.postForm.emit(actor);
  }

  cancel() {
    // this.router.navigate(['/actors']);
    this.cancelForm.emit();
  }
}
