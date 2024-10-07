// import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CounterAloneComponent } from '../../components/counter-alone/counter-alone.component';
import { MenuButtonComponent } from '../../components/menu-button/menu-button.component';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
	standalone: true,
	imports: [CounterAloneComponent, MenuButtonComponent, SideMenuComponent],
	templateUrl: './standalone-page.component.html',
	styleUrl: './standalone-page.component.css'
})
export class StandalonePageComponent {
	public isMenuVisible: boolean = false;

	menuVisible(status: boolean): void {
		this.isMenuVisible = status;
	}
}
