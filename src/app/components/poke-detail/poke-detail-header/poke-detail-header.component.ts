import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-detail-header',
  templateUrl: './poke-detail-header.component.html',
  styleUrls: ['./poke-detail-header.component.scss'],
})
export class PokeDetailHeaderComponent implements OnInit {
  @Input() pokeImg: string | undefined;
  @Input() name: string | undefined;
  @Input() id: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
