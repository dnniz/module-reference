import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form-container',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatCardModule],
  templateUrl: './form-container.component.html',
  styleUrl: './form-container.component.css',
  encapsulation: ViewEncapsulation.None
})
export class FormContainerComponent {

  @Input({ required: true })
  title!: string;

  @Input()
  formGroup!: FormGroup;

  @Output()
  submitForm = new EventEmitter<void>();

  @Output()
  cancelForm = new EventEmitter<void>();

  onSubmit() {
    // console.log('WORKS HERE : onSubmit() : form-container.component.ts');

    this.submitForm.emit();
  }

  onCancel() {
    // console.log('WORKS HERE :  onCancel()  : form-container.component.ts');

    this.cancelForm.emit();
  }
}
