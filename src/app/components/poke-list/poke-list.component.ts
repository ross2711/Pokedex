import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IPokemons } from 'src/app/interfaces/ipokemons';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  pokemons: any[] = [];
  dataSource = new MatTableDataSource<any>(this.pokemons);

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.getPokemons();
  }
  getPokemons() {
    let pokemonData;
    for (let i = 1; i <= 15; i++) {
      this.pokemonService.getPokemons(i).subscribe(
        result => {
          console.log('result', result);
          pokemonData = {
            index: i,
            image: result.sprites.front_default,
            id: result.id,
            name: result.name,
            type: result.types[0].type.name,
          };
          this.pokemons.push(pokemonData);
          this.dataSource = new MatTableDataSource(this.pokemons);
        },
        err => {
          console.log(err);
        }
      );
    }
    console.log('getPokemons', this.pokemons);
  }

  getCard(card: any) {
    this.router.navigateByUrl(`pokeDetail/${card.index}`);
  }

  /**
   * applyFilter funtion to be updated.
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log('here', this.dataSource.filter);
    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }
}
