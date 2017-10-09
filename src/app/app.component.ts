import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
	  <object class="red" type="image/svg+xml" [data]="cleanUrl('/assets/star.svg')"></object>
    <object class="yellow" type="image/svg+xml" [data]="cleanUrl('/assets/star.svg')"></object>`,
  styles: [`.red > svg {stroke: red} 
  .yellow svg {stroke: yellow}`]
})
export class AppComponent {
	constructor(private _sanitizer: DomSanitizer) {}

	cleanUrl(url) {
		return this._sanitizer.bypassSecurityTrustResourceUrl(url)
	}
}
