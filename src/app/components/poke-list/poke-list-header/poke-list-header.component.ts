import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-list-header',
  templateUrl: './poke-list-header.component.html',
  styleUrls: ['./poke-list-header.component.scss'],
})
export class PokeListHeaderComponent implements OnInit {
  @Input() element: any;
  constructor() {}

  ngOnInit(): void {}
}
