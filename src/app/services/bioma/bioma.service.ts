import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IBioma {
	id?: number;
	nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class BiomaService {
	url = 'http://webplanta-cb.herokuapp.com/api/bioma';
 
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
	* @returns Observable with the search results
	*/
	listarBiomas(): Observable<IBioma[]> {
		return this.http.get<IBioma[]>(`${this.url}`);
	}
}
