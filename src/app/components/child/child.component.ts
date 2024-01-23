import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<p>Child Component - Received Value: {{ inputValue }}</p>'
})
export class ChildComponent implements OnChanges {
  @Input() inputValue: string | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    // This method will be called whenever there is a change in the input property
    if (changes['inputValue']) {
      console.log('Input value changed:', changes['inputValue'].currentValue);
    }
  }
}
