import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'maps',
		loadChildren: () =>
			import('./maps/maps.module').then((m) => m.MapsModule)
	},
	{
		path: 'standalone',
		loadComponent: () =>
			import(
				'./standalone/pages/standalone-page/standalone-page.component'
			).then((m) => m.StandalonePageComponent)
	},
	{ path: '**', redirectTo: 'maps' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
