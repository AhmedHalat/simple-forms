import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'field',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
  @Input() label = '';
  @Input() value = '';

}
