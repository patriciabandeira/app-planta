import { PlantaService } from './../services/planta/planta.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planta-detalhes',
  templateUrl: './planta-detalhes.page.html',
  styleUrls: ['./planta-detalhes.page.scss'],
})
export class PlantaDetalhesPage implements OnInit {

	planta = null;

	/**
	* Constructor of our details page
	* @param activatedRoute Information about the route we are on
	* @param plantaService The movie Service to get data
	*/
	constructor(private activatedRoute: ActivatedRoute, private plantaService: PlantaService) { }

	ngOnInit() {
		// Get the ID that was passed with the URL
		let id = this.activatedRoute.snapshot.paramMap.get('id');
		console.log(id);

		// Get the information from the API
		this.plantaService.detalhesPlanta(id).subscribe(result => {
			this.planta = result;
		});
	}

	openWebsite() {
		//window.open(this.planta.Website, '_blank');
	}
}