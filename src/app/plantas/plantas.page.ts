import { PlantaService, SearchType } from './../services/planta/planta.service';
import { LoadingService } from './../services/loading.service';
import { ToastService } from './../services/toast.service';

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
	searchTerm: string;
	lastSearchTerm: string;
	type: SearchType = SearchType.all;
	isItemAvailable: boolean;
	items : any[];

	/**
	* Constructor of our first page
	* @param plantaService The planta Service to get data
	*/
	constructor(private plantaService: PlantaService, private loading: LoadingService, private tost: ToastService) { }

	ngOnInit() {
		this.carregarPlantas();
	}

	carregarPlantas(){
		this.loading.present();
		this.plantaService.listarPlantas().subscribe(result => {
			this.resultado = result;
			this.loading.dismiss();
		}, error => {
			console.log(error);
			this.loading.dismiss().then(() => {
				this.tost.present({header: 'Erro', message: 'Falha ao conectar. Verifique sua conexão ou tente novamente!', duration: 10000});
			});
		});
	}

	searchChanged($event: any) {
		if(this.searchTerm.length < 3 || this.searchTerm == this.lastSearchTerm){
			return;
		}
		this.loading.present();
		this.plantaService.buscarPlanta(this.searchTerm, this.type).subscribe(result => {
			this.lastSearchTerm = this.searchTerm;
			this.resultado = result;
			this.loading.dismiss();
		}, () => {
			this.loading.dismiss().then(() => {
				this.tost.present({header: 'Erro', message: 'Falha ao conectar. Verifique sua conexão ou tente novamente!', duration: 10000});
			});
		});
	}

}