import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<button [inlineSVG]="'/assets/star.svg'">Button with image</button>`,
  styles: [`/deep/ svg {color: red;}`]
})
export class AppComponent {
	constructor() {}
}
