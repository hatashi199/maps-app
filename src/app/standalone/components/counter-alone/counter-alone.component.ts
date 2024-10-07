import { Component, Input } from '@angular/core';

@Component({
	selector: 'counter-alone',
	standalone: true,
	imports: [],
	templateUrl: './counter-alone.component.html',
	styleUrl: './counter-alone.component.css'
})
export class CounterAloneComponent {
	@Input()
	public counter: number = 0;

	increaseCounter() {
		this.counter++;
	}

	decreaseCounter() {
		this.counter--;
	}

	resetCounter() {
		this.counter = 0;
	}
}
