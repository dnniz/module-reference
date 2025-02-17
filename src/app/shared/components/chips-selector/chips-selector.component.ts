import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ChangeDetectionStrategy, Component, computed, EventEmitter, inject, Input, model, OnInit, Output, signal} from '@angular/core';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { itemSelectorDto } from './item-selector.dto';

@Component({
  selector: 'app-chips-selector',
  templateUrl: './chips-selector.component.html',
  styleUrl: './chips-selector.component.css',
  imports: [MatFormFieldModule, MatChipsModule, MatIconModule, MatAutocompleteModule, FormsModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipsSelectorComponent implements OnInit{
  constructor() {
    this.form.controls.itemsSelected.valueChanges.subscribe((value) =>{
      // console.log("value:", value)
      this.itemsSelected.emit(this.listItems);
      // this.itemsSelected.emit(value? value : [])
    } )
  }

  ngOnInit(): void {
    if(this.listItems)
      // console.log("listItems", this.listItems)
      this.form.controls.itemsSelected.setValue(this.listItems)
  }

  //Inputs & Oputs
  @Input({required:true})
    label!: string;

  @Input()
  listItems!: itemSelectorDto[] | undefined

  @Input({required:true})
  baseItems!: itemSelectorDto[];

  @Output()
  itemsSelected = new EventEmitter<itemSelectorDto[] | undefined>();

  //Build Components
  form = inject(FormBuilder).group({
    itemsSelected: new FormControl<itemSelectorDto[]>([]),
  });

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];


  readonly filteredItems = () => {
    return this.baseItems.filter(item => !this.listItems?.some((value) => value.key == item.key))
  };


  //Functions
  remove(removeItem: number): void {
    this.listItems = this.listItems?.filter(item => item.key !== removeItem)
    this.itemsSelected.emit(this.listItems);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.listItems?.push(event.option.value)
    event.option.deselect();
  }
}
