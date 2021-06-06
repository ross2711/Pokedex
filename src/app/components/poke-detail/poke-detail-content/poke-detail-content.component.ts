import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-detail-content',
  templateUrl: './poke-detail-content.component.html',
  styleUrls: ['./poke-detail-content.component.scss'],
})
export class PokeDetailContentComponent implements OnInit {
  ST = [
    {
      actor: 'Millie Bobby Brown',
      country: 'UK',
    },
    {
      actor: 'Finn Wolfhard',
      country: 'Canada',
    },
    {
      actor: 'Gaten Matarazzo',
      country: 'USA',
    },
    {
      actor: 'Noah Schnapp',
      country: 'USA',
    },
    {
      actor: 'Caleb McLauglin',
      country: 'USA',
    },
  ];
  @Input() pokeImg: any;
  @Input() pokeAbility: any;
  @Input() pokeHeight: any;
  @Input() pokeWeight: any;
  @Input() pokeStats: any;
  @Input() pokeRandomFourMoves: any;

  constructor() {}

  ngOnInit(): void {}
}
