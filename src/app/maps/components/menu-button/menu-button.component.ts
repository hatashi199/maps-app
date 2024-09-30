import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'maps-menu-button',
	templateUrl: './menu-button.component.html',
	styleUrl: './menu-button.component.css'
})
export class MenuButtonComponent {
	public isVisible: boolean = false;

	@Output()
	public onShowMenu: EventEmitter<boolean> = new EventEmitter<boolean>();

	showMenuEmitter(): void {
		this.isVisible = !this.isVisible;
		this.onShowMenu.emit(this.isVisible);
	}
}
