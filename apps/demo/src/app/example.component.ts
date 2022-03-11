import { Component, Input } from '@angular/core';

// When using interfaces use
import type { MenuItem } from './core';

// instead of
// import { MenuItem } from './core';

@Component({
  selector: 'angular-example-interface',
  template: '{{ menu | json }}',
})
export class MenuJsonComponent {
  @Input() menu: MenuItem;
}
