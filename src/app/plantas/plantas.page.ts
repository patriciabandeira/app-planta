import { PlantaService } from './../services/planta/planta.service';
import { BiomaService, IBioma } from './../services/bioma/bioma.service';
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

	biomas: Observable<IBioma[]>;
	resultado: any;
	searchTerm: string;
	lastSearchTerm: string;
	bioma: number;
	lastBioma : number;

	/**
	* Constructor of our first page
	* @param plantaService The planta Service to get data
	*/
	constructor(private plantaService: PlantaService, private biomaService: BiomaService, private loading: LoadingService, private tost: ToastService) { }

	ngOnInit() {
		this.carregarBiomas();
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

	carregarBiomas(){
		this.biomas = this.biomaService.listarBiomas();
	}

	searchChanged($event: any) {
		if(typeof this.searchTerm != 'undefined' && this.searchTerm && this.searchTerm.length < 3 && this.bioma == 0 || this.lastSearchTerm != undefined && this.searchTerm == this.lastSearchTerm && this.lastBioma == this.bioma){
			return;
		}		
		this.loading.present();
		this.plantaService.buscarPlanta(this.searchTerm, this.bioma).subscribe(result => {
			this.lastSearchTerm = this.searchTerm;
			this.lastBioma = this.bioma;
			this.resultado = result;
			this.loading.dismiss();
		}, () => {
			this.loading.dismiss().then(() => {
				this.tost.present({header: 'Erro', message: 'Falha ao conectar. Verifique sua conexão ou tente novamente!', duration: 10000});
			});
		});
	}

}