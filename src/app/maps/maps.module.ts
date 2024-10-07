import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomPageComponent } from './pages/zoom-page/zoom-page.component';
import { SideMenuComponent } from '../standalone/components/side-menu/side-menu.component';
import { MenuButtonComponent } from '../standalone/components/menu-button/menu-button.component';

@NgModule({
	declarations: [
		MiniMapComponent,
		MapsLayoutComponent,
		FullScreenPageComponent,
		MarkersPageComponent,
		PropertiesPageComponent,
		ZoomPageComponent
	],
	imports: [
		CommonModule,
		MapsRoutingModule,
		SideMenuComponent,
		MenuButtonComponent
	]
})
export class MapsModule {}
