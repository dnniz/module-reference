import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-input-img',
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './input-img.component.html',
  styleUrl: './input-img.component.css',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputImgComponent),
      multi: true
    }
  ]
})
export class InputImgComponent {

  @Input({required: true}) label!: string;
  @Input() imageUrl: string | null = null;
  @Output() imageSelected = new EventEmitter<File>();

  previewImage: string | ArrayBuffer | null = null;
  file: File | null = null;

  onChange:(file: File|null) => void = () => {};

  onTouched: () => void = () => {};

  writeValue(value: File|null): void {
    if(value){
      this.file = value;
      this.loadPreviewImage(value);
    }
  }

  registerOnChange(fn: (file: File|null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onFileSelected(event: Event): void {

    const fileInput = event.target as HTMLInputElement;
    if(fileInput.files && fileInput.files.length > 0){
      const file = fileInput.files[0];

      this.imageSelected.emit(file);

      const reader = new FileReader();

      reader.onload = () => {
        this.previewImage = reader.result;
      }

      reader.readAsDataURL(file);
    }
  }

  private loadPreviewImage(file: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.previewImage = reader.result;
    };
  }
}
