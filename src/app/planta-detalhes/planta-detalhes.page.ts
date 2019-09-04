import { PlantaService } from './../services/planta/planta.service';
import { LoadingService } from './../services/loading.service';
import { ToastService } from './../services/toast.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-planta-detalhes',
  templateUrl: './planta-detalhes.page.html',
  styleUrls: ['./planta-detalhes.page.scss'],
})
export class PlantaDetalhesPage implements OnInit {

	planta : any;
	ufsString : string = '';
	biomasString : string = ''

	/**
	* Constructor of our details page
	* @param activatedRoute Information about the route we are on
	* @param plantaService The movie Service to get data
	*/
	constructor(private activatedRoute: ActivatedRoute, private plantaService: PlantaService, private loading: LoadingService, private tost: ToastService, private photoViewer: PhotoViewer) { }

	ngOnInit() {
		this.carregarPlanta();
	}

	carregarPlanta(){
		this.loading.present();
		let id = this.activatedRoute.snapshot.paramMap.get('id');
		this.plantaService.detalhesPlanta(id).subscribe(result => {
			this.planta = result;
			this.ufsToString();
			this.biomasToString();
			this.loading.dismiss();
		}, error => {
			console.log(error);
			this.loading.dismiss().then(() => {
				this.tost.present({header: 'Erro', message: 'Falha ao conectar. Verifique sua conexão ou tente novamente!', duration: 10000});
			});
		});
	}

	async ufsToString() {
		this.ufsString = this.planta.dist_geografica.map(function(uf : any) {
			return uf.sigla;
		}).join(', ');
	}

	async biomasToString() {
		this.biomasString = this.planta.biomas.map(function(bioma : any) {
			return bioma.nome;
		}).join(', ');
	}

	verImagem(index: number, imagem : any){
		var options = {
			share: true,
			closeButton: true,
			copyToReference: true,
			headers: '',
			piccasoOptions: { }
		};
		this.photoViewer.show(imagem.url, (index+1) + ' - ' + imagem.autor + ' - ' + imagem.fonte, options);
	}
}