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
    return this.http.get<any>(`${this.baseUrl}/pokemon`);
  }
  // return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);

  // getPokemons() {
  //   return this.http.get<any>(`${this.baseUrl}/pokemon`);
  // }

  getMoreData(name: string) {
    return this.http.get(`${this.baseUrl}/pokemon/${name}`);
  }
}
