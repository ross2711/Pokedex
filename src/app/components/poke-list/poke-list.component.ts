import {
  ChangeDetectorRef,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IPokemons } from 'src/app/interfaces/ipokemons';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit, OnDestroy, DoCheck {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  obs: Observable<any> | undefined;
  pokemons: IPokemons[] | undefined = [];
  dataSource: MatTableDataSource<IPokemons> = new MatTableDataSource<IPokemons>(
    this.pokemons
  );

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  ngDoCheck() {
    this.changeDetectorRef.detectChanges();
    this.obs = this.dataSource.connect();
  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }

  getPokemons() {
    let pokemonData;
    for (let i = 1; i <= 150; i++) {
      this.pokemonService.getPokemons(i).subscribe(
        result => {
          pokemonData = {
            index: i,
            image: result.sprites.front_default,
            id: result.id,
            name: result.name,
            type: result.types[0].type.name,
          };
          this.pokemons!.push(pokemonData);
          this.dataSource = new MatTableDataSource(this.pokemons);
          this.dataSource.paginator = this.paginator!;
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  getCard(card: any) {
    this.router.navigateByUrl(`pokeDetail/${card.index}`);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log('filtered data', this.dataSource.filter);
  }
}
