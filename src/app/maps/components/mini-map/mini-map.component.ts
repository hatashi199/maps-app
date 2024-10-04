import {
	AfterViewInit,
	Component,
	ElementRef,
	Input,
	ViewChild
} from '@angular/core';
import { Map, Marker } from 'maplibre-gl';
import { environment } from '../../../../environments/environment.development';

@Component({
	selector: 'maps-mini-map',
	templateUrl: './mini-map.component.html',
	styleUrl: './mini-map.component.css'
})
export class MiniMapComponent implements AfterViewInit {
	@Input()
	public lng_lat?: [number, number];

	public map?: maplibregl.Map;
	@ViewChild('map')
	public divMap?: ElementRef;

	ngAfterViewInit(): void {
		if (!this.divMap) throw 'Map div not found';
		if (!this.lng_lat) throw "Lnglat can't be null";

		this.map = new Map({
			container: this.divMap?.nativeElement,
			style: `https://api.maptiler.com/maps/streets/style.json?key=${environment.MAP_TILER_KEY}`,
			center: this.lng_lat,
			zoom: 15,
			interactive: false
		});

		const color = '#xxxxxx'.replace(/x/g, (y) =>
			((Math.random() * 16) | 0).toString(16)
		);

		this.addMarker(this.lng_lat, color);
	}

	addMarker(lng_lat: [number, number], color: string) {
		if (!this.map) return;
		const marker = new Marker({ color }).setLngLat(lng_lat).addTo(this.map);
	}
}
