import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'maplibre-gl';
import { environment } from '../../../../environments/environment.development';
import 'maplibre-gl/dist/maplibre-gl.css';

@Component({
	selector: 'maps-full-screen',
	templateUrl: './full-screen-page.component.html',
	styleUrl: './full-screen-page.component.css'
})
export class FullScreenPageComponent implements AfterViewInit {
	public map?: maplibregl.Map;
	@ViewChild('map')
	public divMap?: ElementRef;

	ngAfterViewInit(): void {
		if (!this.divMap) return;

		this.map = new Map({
			container: this.divMap?.nativeElement,
			style: `https://api.maptiler.com/maps/streets/style.json?key=${environment.MAP_TILER_KEY}`,
			center: [0, 0],
			zoom: 1
		});
	}
}
