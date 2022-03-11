import { Component, Input } from '@angular/core';
import { MenuItem } from './core';

@Component({
  selector: 'angular-example-interface',
  template: '{{ menu | json }}'
})
export class MenuJsonComponent {
  @Input() menu: MenuItem
}
