import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  pokemons: any[] = [];
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }
  getPokemons() {
    for (let i = 1; i <= 10; i++) {
      this.pokemonService.getPokemons(i).subscribe(
        // this.pokemonService.getPokemons().subscribe(
        (response: any) => {
          // console.log(i, response);
          response.results.forEach((result: any) => {
            this.pokemonService
              .getMoreData(result.name)
              .subscribe((response: any) => {
                console.log(response);
                this.pokemons.push(response);
              });
          });
        },
        (err) => {}
      );
    }
  }
}
