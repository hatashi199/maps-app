import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
	label: string;
	route: string;
	icon: string;
}
@Component({
	selector: 'side-menu',
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: './side-menu.component.html',
	styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
	@Input()
	public menuActive: boolean = false;
	public menuItems: MenuItem[] = [
		{
			label: 'Mapa',
			route: '/maps/full-screen',
			icon: 'assets/icons/Map.svg'
		},
		{
			label: 'Marcas',
			route: '/maps/markers',
			icon: 'assets/icons/Marker.svg'
		},
		{
			label: 'Propiedades',
			route: '/maps/properties',
			icon: 'assets/icons/Property.svg'
		},
		{
			label: 'Zoom',
			route: '/maps/zoom',
			icon: 'assets/icons/Zoom.svg'
		},
		{
			label: 'Standalone',
			route: '/standalone',
			icon: 'assets/icons/Zoom.svg'
		}
	];
}
