import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Typescript custom enum for search types (optional)
export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

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
	url = 'http://localhost/web-plantas2/api/planta';
	//url = 'http://192.168.43.218/web-plantas2/api/planta';
 
	/**
	* Constructor of the Service with Dependency Injection
	* @param http The standard Angular HttpClient to make requests
	*/
	constructor(private http: HttpClient) { }


	/**
	* Get data from the OmdbApi 
	* map the result to return only the results that we need
	* 
	* @param {string} title Search Term
	* @param {SearchType} type movie, series, episode or empty
	* @returns Observable with the search results
	*/
	listarPlantas(): Observable<any> {
		return this.http.get(`${this.url}`);
	}

	/**
	* Get data from the OmdbApi 
	* map the result to return only the results that we need
	* 
	* @param {string} title Search Term
	* @param {SearchType} type movie, series, episode or empty
	* @returns Observable with the search results
	*/
	//buscarPlanta(title: string, type: SearchType): Observable<any> {
		//return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}`).pipe(
		//	map(results => results['data'])
		//);
	//}

	/**
	* Get the detailed information for an ID using the "i" parameter
	* 
	* @param {string} id imdbID to retrieve information
	* @returns Observable with detailed information
	*/
	detalhesPlanta(id) {
		return this.http.get(`${this.url}/${id}`);
	}
}
