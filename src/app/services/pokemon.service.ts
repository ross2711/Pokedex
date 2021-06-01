import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  getPokemonDetail(id: any) {
    throw new Error('Method not implemented.');
  }
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {
    console.log('environ', this.baseUrl);
  }

  getPokemons(ind: number) {
    return this.http.get<any>(`${this.baseUrl}/pokemon/${ind}`);
  }

  getMoreData(name: string) {
    return this.http.get(`${this.baseUrl}/${name}`);
  }
}
