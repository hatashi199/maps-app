import { Component, Input } from '@angular/core';

@Component({
	selector: 'maps-side-menu',
	templateUrl: './side-menu.component.html',
	styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
	@Input()
	public menuActive: boolean = false;
}
