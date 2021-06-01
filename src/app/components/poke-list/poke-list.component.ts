import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  pokemons: any[] = [];
  dataSource = new MatTableDataSource(this.pokemons);

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }
  getPokemons() {
    this.pokemonService.getPokemons().subscribe(
      (response: any) => {
        response.results.forEach((result: any) => {
          this.pokemonService
            .getMoreData(result.name)
            .subscribe((response: any) => {
              this.pokemons.push(response);
            });
        });
      },
      (err) => {}
    );
    console.log('getPokemons', this.pokemons);
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
