import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {
    console.log('environ', this.baseUrl);
  }

  getPokemons() {
    return this.http.get<any>(`${this.baseUrl}?limit=10`);
  }

  getMoreData(name: string) {
    return this.http.get(`${this.baseUrl}/${name}`);
  }
}
