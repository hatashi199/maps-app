import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'maplibre-gl';
import { environment } from '../../../../environments/environment.development';

interface Marker_Color {
	color: string;
	marker: Marker;
}

interface PlainMarker {
	color: string;
	lng_lat: number[];
}
@Component({
	selector: 'maps-markers',
	templateUrl: './markers-page.component.html',
	styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent implements AfterViewInit {
	public map?: maplibregl.Map;
	@ViewChild('map')
	public divMap?: ElementRef;
	public markerList: Marker_Color[] = [];

	ngAfterViewInit(): void {
		if (!this.divMap) return;

		this.map = new Map({
			container: this.divMap?.nativeElement,
			style: `https://api.maptiler.com/maps/streets/style.json?key=${environment.MAP_TILER_KEY}`,
			center: [-74.5, 40],
			zoom: 13
		});

		this.readFromLocalStorage();
	}

	createMarker() {
		if (!this.map) return;

		const color = '#xxxxxx'.replace(/x/g, (y) =>
			((Math.random() * 16) | 0).toString(16)
		);
		const lng_lat = this.map.getCenter();

		this.addMarker(lng_lat, color);
	}

	addMarker(lng_lat: LngLat, color: string) {
		if (!this.map) return;
		if (this.markerList.length === 10) {
			this.deleteMarker(0);
		}

		const marker = new Marker({ color, draggable: true })
			.setLngLat(lng_lat)
			.addTo(this.map);

		this.markerList.push({ color, marker });
		this.saveToLocalStorage();
		this.onMarkerMoveUpdateLocalStorage(marker);
	}

	deleteMarker(markerPos: number) {
		this.markerList[markerPos].marker.remove();
		this.markerList.splice(markerPos, 1);
	}

	flyToMarker(marker: Marker) {
		if (!this.map) return;

		this.map.flyTo({
			zoom: 13,
			center: marker.getLngLat()
		});
	}

	onMarkerMoveUpdateLocalStorage(marker: Marker) {
		marker.on('dragend', (e) => {
			this.saveToLocalStorage();
		});
	}

	saveToLocalStorage() {
		const plainMarker: PlainMarker[] = this.markerList.map(
			({ color, marker }) => {
				return {
					color,
					lng_lat: marker.getLngLat().toArray()
				};
			}
		);

		localStorage.setItem('markers', JSON.stringify(plainMarker));
	}

	readFromLocalStorage() {
		const plainMarkersString = localStorage.getItem('markers') ?? '[]';
		const plainMarkers: PlainMarker[] = JSON.parse(plainMarkersString);

		plainMarkers.forEach(({ color, lng_lat }) => {
			const [lng, lat] = lng_lat;
			const coords = new LngLat(lng, lat);
			this.addMarker(coords, color);
		});
	}
}
