import { PlantaService, SearchType } from './../services/planta/planta.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.page.html',
  styleUrls: ['./plantas.page.scss'],
})
export class PlantasPage implements OnInit {

	results: Observable<any>;
	resultado: any;
	searchTerm: string = '';
	type: SearchType = SearchType.all;

	/**
	* Constructor of our first page
	* @param plantaService The planta Service to get data
	*/
	constructor(private plantaService: PlantaService) { }

	ngOnInit() { 
		this.plantaService.listarPlantas().subscribe(result => {
			this.resultado = result;
		});;
	}

	searchChanged($event: any) {
		// Call our service function which returns an Observable
		//this.results = this.movieService.searchData(this.searchTerm, this.type);
	}

}
