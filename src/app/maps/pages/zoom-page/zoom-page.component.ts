import {
	AfterViewInit,
	Component,
	ElementRef,
	OnDestroy,
	ViewChild
} from '@angular/core';
import { LngLat, LngLatLike, Map } from 'maplibre-gl';
import { environment } from '../../../../environments/environment.development';

@Component({
	selector: 'maps-zoom',
	templateUrl: './zoom-page.component.html',
	styleUrl: './zoom-page.component.css'
})
export class ZoomPageComponent implements AfterViewInit, OnDestroy {
	public map?: maplibregl.Map;
	@ViewChild('map')
	public divMap?: ElementRef;
	public zoom: number = 10;
	public lng_lat: LngLatLike = new LngLat(-74.5, 40);
	public lng: number = -74.5;
	public lat: number = 40;

	ngAfterViewInit(): void {
		if (!this.divMap) return;

		this.map = new Map({
			container: this.divMap?.nativeElement,
			style: `https://api.maptiler.com/maps/streets/style.json?key=${environment.MAP_TILER_KEY}`,
			center: this.lng_lat,
			zoom: this.zoom
		});

		this.mapListeners();
	}

	ngOnDestroy(): void {
		this.map!.remove();
	}

	mapListeners() {
		if (!this.map) throw 'Map not exist';

		this.map.on('zoom', (e) => {
			this.zoom = this.map!.getZoom();
		});

		this.map.on('zoomend', (e) => {
			if (this.map!.getZoom() > 18) this.map!.zoomTo(18);
		});

		this.map.on('move', (e) => {
			this.lng_lat = this.map!.getCenter();
			const { lng, lat } = this.lng_lat;
			this.lng = lng;
			this.lat = lat;
		});
	}

	zoomChanged(value: string) {
		this.zoom = Number(value);
		this.map?.zoomTo(this.zoom);
	}
}
