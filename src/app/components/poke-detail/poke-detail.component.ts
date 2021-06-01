import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss'],
})
export class PokeDetailComponent implements OnInit {
  constructor(
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.getPokemonDetail(params['id']);
    });
  }

  ngOnInit(): void {}

  getPokemonDetail(id: number) {
    this.pokemonService.getPokemons(id).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {}
    );
  }
}
