import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss'],
})
export class PokeDetailComponent implements OnInit {
  pokemon: any = '';
  pokeType = [];
  pokeImg = '';
  pokeAbility = [];
  pokeHeight: any = '';
  pokeWeight: any = '';
  pokeStats: any;
  pokeMoves: any;
  pokeRandomFourMoves: any;
  name: any;
  id: any;

  constructor(
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.getPokemonDetail(params['id']);
    });
  }

  ngOnInit(): void {}

  // getsRandom returns 4 random 'Moves'
  getRandom(arr: string | any[], n: number) {
    let result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len) {
      n = len;
    }
    while (n--) {
      let x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  getPokemonDetail(id: number) {
    this.pokemonService.getPokemons(id).subscribe(
      result => {
        console.log('res', result);
        this.pokemon = result;
        this.pokeImg = this.pokemon.sprites.front_default;
        this.pokeType = this.pokemon.types[0].type.name;
        this.pokeAbility = this.pokemon.abilities.map((ele: any) => ele.ability.name);
        this.pokeHeight = this.pokemon.height;
        this.pokeWeight = this.pokemon.weight;
        this.pokeStats = this.pokemon.stats.map((ele: any) => ele.stat.name);
        this.pokeMoves = this.pokemon.moves.map((ele: any) => ele.move.name);
        this.pokeRandomFourMoves = this.getRandom(this.pokeMoves, 4);
        this.id = this.pokemon.id;
        this.name = this.pokemon.name;
      },
      error => {}
    );
  }
}
