import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getPokemons(index: number) {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon?limit=20`);
  }
  // return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);

  // getPokemons() {
  //   return this.http.get<any>(`${this.baseUrl}/pokemon`);
  // }

  getMoreData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    // return this.http.get(`${this.baseUrl}/pokemon/${name}`);
  }
}
