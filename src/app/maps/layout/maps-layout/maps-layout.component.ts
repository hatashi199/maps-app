import { Component } from '@angular/core';

@Component({
	selector: 'maps-layout',
	templateUrl: './maps-layout.component.html',
	styleUrl: './maps-layout.component.css'
})
export class MapsLayoutComponent {
	public isMenuVisible: boolean = false;

	menuVisible(status: boolean): void {
		this.isMenuVisible = status;
	}
}
