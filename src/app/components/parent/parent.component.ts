import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <input [(ngModel)]="inputValue">
    <p>Received Value: {{ inputValue }}</p>
  `
})
export class ParentComponent implements OnChanges {
  @Input() inputValue: string | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['inputValue']) {
      console.log('Input value changed:', changes['inputValue'].currentValue);
    }
  }
}
