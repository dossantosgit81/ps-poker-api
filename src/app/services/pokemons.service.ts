import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private baseUrl = "https://pokeapi.co/api/v2/pokemon";
  constructor(private http: HttpClient) { }

  getPokemons(page: number): Observable<any>{
    const limit: number = 10;
    let basePath: string = `?limit=${limit}&offset=${page}`
    return this.http.get(this.baseUrl+basePath);
  }

    getPokemon(id: string): Observable<any>{
      return this.http.get(`${this.baseUrl}/${id}`);
  }
}
