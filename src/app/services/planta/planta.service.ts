import { IBioma } from './../../services/bioma/bioma.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IPlanta {
	data: any;
	first_page_url: string;
	from: number;
	last_page: number;
	last_page_url: string;
	next_page_url: string;
	path: string;
	per_page: number;
	prev_page_url: string;
	to: number;
	total: number;
}

@Injectable({
  providedIn: 'root'
})
export class PlantaService {
	url = 'http://webplanta-cb.herokuapp.com/api/planta';
 
	/**
	* Constructor of the Service with Dependency Injection
	* @param http The standard Angular HttpClient to make requests
	*/
	constructor(private http: HttpClient) { }


	/**
	* Get data from the API 
	* map the result to return only the results that we need
	* 
	* @returns Observable with the search results
	*/
	listarPlantas(): Observable<any> {
		return this.http.get(`${this.url}`);
	}

	/**
	* Get data from the OmdbApi 
	* map the result to return only the results that we need
	* 
	* @returns Observable with the search results
	*/
	buscarPlanta(title: string, bioma: number): Observable<any> {
		let params: HttpParams = new HttpParams();
		if(typeof title != 'undefined' && title){
			params = params.set('nome', title); 
		}
		if(typeof bioma != 'undefined' && bioma){
			params = params.set('bioma', bioma.toString()); 
		}
		return this.http.get(`${this.url}/pesquisar`, {params});
	}

	/**
	* Get the detailed information
	* 
	* @param {string} id imdbID to retrieve information
	* @returns Observable with detailed information
	*/
	detalhesPlanta(id) {
		return this.http.get(`${this.url}/${id}`);
	}
}
