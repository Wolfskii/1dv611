import { Component, OnInit, Input } from '@angular/core';

/**
 * Component for displaying a form field.
 *
 */
@Component({
  selector: 'form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {

  @Input() label: string;
  @Input() inputValue: string;

  constructor() { }

  ngOnInit(): void {
  }

}
